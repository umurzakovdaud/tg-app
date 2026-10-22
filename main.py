"""
OnlyFits — Сервер приложения и Telegram-бот для Render.com
Объединяет:
1. Веб-сервер Flask (раздает Telegram Mini App OnlyFits)
2. API для регистрации, выбора программы и воскресных замеров веса
3. Telegram-бот: регистрация, команды, запись веса из чата, анализ фото еды
4. Фоновый планировщик напоминаний о воскресном взвешивании
"""

import os
import sys
import time
import json
import datetime
import threading
import urllib.request
import urllib.parse
from flask import Flask, send_from_directory, jsonify, request

# Инициализация Flask
app = Flask(__name__, static_folder="public", static_url_path="")

# Переменные окружения
BOT_TOKEN = os.environ.get("TELEGRAM_BOT_TOKEN", "").strip()

# Render автоматически передает RENDER_EXTERNAL_URL вида https://myapp.onrender.com
RENDER_URL = os.environ.get("RENDER_EXTERNAL_URL", "").strip()
WEBAPP_URL = os.environ.get("WEBAPP_URL", "").strip() or RENDER_URL or "http://localhost:5000"

TELEGRAM_API = f"https://api.telegram.org/bot{BOT_TOKEN}" if BOT_TOKEN else ""

_bot_started = False
_bot_lock = threading.Lock()
_users_lock = threading.Lock()

USERS_FILE = os.path.join(os.path.dirname(__file__), "data", "users.json")
PROGRAMS_FILE = os.path.join(os.path.dirname(__file__), "data", "programs.json")


# --- Хранилище программ и пользователей (JSON Database) ---

def load_programs():
    """Загрузка базы данных программ тренировок из data/programs.json"""
    if not os.path.exists(PROGRAMS_FILE):
        return {}
    try:
        with open(PROGRAMS_FILE, "r", encoding="utf-8") as f:
            return json.load(f)
    except Exception as e:
        print(f"[Programs DB] Ошибка чтения {PROGRAMS_FILE}: {e}", file=sys.stderr)
        return {}


def load_users():
    """Загрузка базы данных пользователей из data/users.json"""
    with _users_lock:
        if not os.path.exists(USERS_FILE):
            return {}
        try:
            with open(USERS_FILE, "r", encoding="utf-8") as f:
                return json.load(f)
        except Exception as e:
            print(f"[Users DB] Ошибка чтения {USERS_FILE}: {e}", file=sys.stderr)
            return {}


def save_users(users_data):
    """Сохранение базы данных пользователей в data/users.json"""
    with _users_lock:
        try:
            os.makedirs(os.path.dirname(USERS_FILE), exist_ok=True)
            with open(USERS_FILE, "w", encoding="utf-8") as f:
                json.dump(users_data, f, ensure_ascii=False, indent=2)
            return True
        except Exception as e:
            print(f"[Users DB] Ошибка сохранения {USERS_FILE}: {e}", file=sys.stderr)
            return False


def get_user(user_id):
    """Получение пользователя по user_id / chat_id"""
    users = load_users()
    return users.get(str(user_id))


def upsert_user(user_id, user_dict):
    """Создание или обновление пользователя"""
    users = load_users()
    uid = str(user_id)
    if uid in users:
        users[uid].update(user_dict)
    else:
        users[uid] = user_dict
    save_users(users)
    return users[uid]


def add_weight_entry(user_id, weight, note="", date_str=None):
    """
    Добавление замера веса (особенно воскресного).
    Автоматически рассчитывает разницу с прошлым замером и с начальным весом.
    """
    users = load_users()
    uid = str(user_id)
    user = users.get(uid)
    if not user:
        return None, "Пользователь не найден"

    today_dt = datetime.datetime.now()
    if not date_str:
        date_str = today_dt.strftime("%Y-%m-%d")

    is_sunday = (today_dt.weekday() == 6)

    try:
        weight = round(float(weight), 2)
    except (ValueError, TypeError):
        return None, "Некорректное значение веса"

    initial_weight = user.get("initial_weight", weight)
    prev_weight = user.get("current_weight", weight)

    diff_prev = round(weight - prev_weight, 2)
    diff_initial = round(weight - initial_weight, 2)

    entry = {
        "date": date_str,
        "weight": weight,
        "diff_prev": diff_prev,
        "diff_initial": diff_initial,
        "is_sunday": is_sunday,
        "note": note or ("Воскресный замер" if is_sunday else "Промежуточный замер")
    }

    history = user.get("weight_history", [])
    history.append(entry)

    user["current_weight"] = weight
    user["weight_history"] = history
    if is_sunday:
        user["last_sunday_weighed"] = date_str

    users[uid] = user
    save_users(users)
    return entry, None


def get_sunday_info():
    """Информация о текущем дне и следующем воскресенье"""
    now = datetime.datetime.now()
    is_sunday = (now.weekday() == 6)

    days_until_sunday = (6 - now.weekday()) % 7
    if days_until_sunday == 0 and not is_sunday:
        days_until_sunday = 7
    next_sunday_date = now + datetime.timedelta(days=days_until_sunday)

    days_ru = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"]

    return {
        "is_sunday": is_sunday,
        "today": now.strftime("%Y-%m-%d"),
        "today_day_name": days_ru[now.weekday()],
        "next_sunday": next_sunday_date.strftime("%Y-%m-%d"),
        "next_sunday_formatted": next_sunday_date.strftime("%d.%m")
    }


# --- Маршруты веб-сервера & REST API ---

@app.route("/")
def index():
    """Главная страница OnlyFits Mini App"""
    return send_from_directory("public", "index.html")


@app.route("/health")
def health():
    """Health check для сервиса Render"""
    active_url = os.environ.get("WEBAPP_URL", "").strip() or os.environ.get("RENDER_EXTERNAL_URL", "").strip() or WEBAPP_URL
    return jsonify({
        "status": "healthy",
        "service": "OnlyFits Workout & Nutrition WebApp",
        "bot_active": bool(BOT_TOKEN),
        "webapp_url": active_url
    })


@app.route("/api/programs", methods=["GET"])
def api_programs():
    """Получение каталога программ тренировок (Сплит, Тяни/Толкай, Верх/Низ, Фуллбоди)"""
    programs = load_programs()
    return jsonify({
        "status": "ok",
        "programs": programs,
        "count": len(programs)
    })


@app.route("/api/sunday_info")
def api_sunday_info():
    """Получение статуса воскресного взвешивания"""
    return jsonify(get_sunday_info())


@app.route("/api/user/register", methods=["POST"])
def api_user_register():
    """
    Регистрация пользователя из WebApp:
    - начальный вес (initial_weight)
    - рост (height)
    - возраст (age)
    - пол (gender)
    - выбранная программа тренировок (split)
    - цель (goal)
    """
    data = request.get_json() or {}
    user_id = data.get("user_id") or data.get("id") or f"guest_{int(time.time())}"
    uid = str(user_id)

    first_name = data.get("first_name") or data.get("name") or "Спортсмен"
    try:
        initial_weight = round(float(data.get("initial_weight") or data.get("weight") or 75.0), 2)
        height = int(data.get("height") or 178)
        age = int(data.get("age") or 25)
    except (ValueError, TypeError):
        return jsonify({"status": "error", "message": "Некорректные параметры тела"}), 400

    gender = data.get("gender") or "male"
    split = data.get("split") or "upper_lower_gym_4"
    goal = data.get("goal") or "muscle_gain"
    location = data.get("location") or "gym"
    days_per_week = int(data.get("days_per_week") or 4)

    today_str = datetime.datetime.now().strftime("%Y-%m-%d")
    is_sunday = (datetime.datetime.now().weekday() == 6)

    existing = get_user(uid) or {}
    weight_history = existing.get("weight_history", [])
    if not weight_history:
        weight_history = [
            {
                "date": today_str,
                "weight": initial_weight,
                "diff_prev": 0.0,
                "diff_initial": 0.0,
                "is_sunday": is_sunday,
                "note": "Начальный вес при регистрации"
            }
        ]

    user_data = {
        "user_id": uid,
        "first_name": first_name,
        "initial_weight": initial_weight,
        "current_weight": initial_weight,
        "height": height,
        "age": age,
        "gender": gender,
        "split": split,
        "goal": goal,
        "location": location,
        "days_per_week": days_per_week,
        "is_registered": True,
        "registered_at": existing.get("registered_at") or today_str,
        "weight_history": weight_history,
        "last_sunday_weighed": today_str if is_sunday else existing.get("last_sunday_weighed")
    }

    saved = upsert_user(uid, user_data)
    print(f"[API] Пользователь {uid} ({first_name}) успешно зарегистрирован. Начальный вес: {initial_weight} кг, программа: {split}")
    return jsonify({"status": "ok", "user": saved})


@app.route("/api/user/<user_id>", methods=["GET"])
def api_get_user(user_id):
    """Получение профиля пользователя"""
    user = get_user(user_id)
    if not user:
        return jsonify({"status": "not_found", "message": "Пользователь не найден"}), 404
    return jsonify({"status": "ok", "user": user})


@app.route("/api/user/<user_id>/sunday_weight", methods=["POST"])
def api_log_sunday_weight(user_id):
    """Запись актуального веса (воскресное взвешивание)"""
    data = request.get_json() or {}
    weight = data.get("weight")
    note = data.get("note", "")
    date_str = data.get("date")

    entry, err = add_weight_entry(user_id, weight, note, date_str)
    if err:
        return jsonify({"status": "error", "message": err}), 400

    user = get_user(user_id)
    return jsonify({"status": "ok", "entry": entry, "user": user})


@app.route("/api/parse-workout-photo", methods=["POST"])
def api_parse_workout_photo():
    """
    Принимает одно или несколько изображений (скриншотов) программы тренировок.
    Если задан GEMINI_API_KEY, использует Gemini Vision для извлечения структурированного плана.
    Иначе возвращает указание на клиентский OCR (Tesseract.js).
    """
    gemini_key = os.environ.get("GEMINI_API_KEY", "").strip()
    data = request.get_json() or {}
    
    # Поддерживаем как одиночное фото, так и массив скриншотов
    images = []
    if "images_b64" in data and isinstance(data["images_b64"], list):
        images = data["images_b64"]
    elif "image_b64" in data and data["image_b64"]:
        images = [data["image_b64"]]

    if gemini_key and images:
        try:
            prompt_text = (
                "Ты — опытный фитнес-тренер. Проанализируй прикрепленные скриншоты или фото программы тренировок.\n"
                "Если скриншотов несколько, объедини их в одну цельную тренировочную программу на 3-4 дня (или сколько указано на изображениях).\n"
                "Выдели тренировочные дни (День 1, День 2, День 3, День 4 и т.д.) и список упражнений в каждом дне с точным числом подходов и повторений.\n"
                "Верни ответ ТОЛЬКО в формате валидного JSON без markdown кавычек:\n"
                "{\n"
                '  "title": "Моя программа",\n'
                '  "days": [\n'
                '    {\n'
                '      "dayNum": 1,\n'
                '      "title": "Верх тела",\n'
                '      "exercises": [\n'
                '        {"name": "Жим штанги лежа", "sets": 4, "reps": "8-10"}\n'
                "      ]\n"
                "    }\n"
                "  ]\n"
                "}"
            )

            parts = [{"text": prompt_text}]
            for img in images:
                if "," in img:
                    img = img.split(",", 1)[1]
                parts.append({
                    "inline_data": {
                        "mime_type": "image/jpeg",
                        "data": img
                    }
                })

            gemini_url = f"https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key={gemini_key}"
            payload = {
                "contents": [{"parts": parts}],
                "generationConfig": {"temperature": 0.2}
            }
            req = urllib.request.Request(
                gemini_url,
                data=json.dumps(payload).encode("utf-8"),
                headers={"Content-Type": "application/json"}
            )
            with urllib.request.urlopen(req, timeout=35) as resp:
                resp_json = json.loads(resp.read().decode("utf-8"))
                text_out = resp_json["candidates"][0]["content"]["parts"][0]["text"].strip()
                if text_out.startswith("```"):
                    text_out = text_out.strip("`").replace("json", "", 1).strip()
                parsed = json.loads(text_out)
                return jsonify({"status": "ok", "program": parsed})
        except Exception as e:
            print(f"[Gemini Vision OCR Error]: {e}", file=sys.stderr)

    return jsonify({
        "status": "fallback",
        "message": "Используется встроенный клиентский OCR (Tesseract)"
    })


@app.route("/api/health-sync", methods=["GET", "POST"])
def api_health_sync():
    """
    Синхронизация данных из Apple Здоровье (Apple HealthKit / Shortcuts).
    Принимает и сохраняет количество шагов, фазы сна, активные калории и актуальный вес.
    """
    if request.method == "POST":
        data = request.get_json() or {}
        user_id = str(data.get("user_id") or "guest")

        steps = int(data.get("steps") or 8266)
        sleep_hours = int(data.get("sleep_hours") or 7)
        sleep_minutes = int(data.get("sleep_minutes") or 45)
        sleep_score = int(data.get("sleep_score") or 84)
        active_calories = int(data.get("active_calories") or 640)
        weight = float(data.get("weight")) if data.get("weight") else None

        weekly_steps = data.get("weekly_steps") or [7200, 8420, 9100, 6800, 8500, 10200, steps]
        weekly_sleep = data.get("weekly_sleep") or [6.8, 7.2, 7.5, 6.2, 7.8, 8.1, round(sleep_hours + sleep_minutes / 60.0, 1)]
        weekly_calories = data.get("weekly_calories") or [580, 640, 710, 520, 680, 890, active_calories]

        now_iso = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")

        health_payload = {
            "synced_at": now_iso,
            "connected": True,
            "source": "Apple Здоровье (HealthKit)",
            "steps": steps,
            "sleep_hours": sleep_hours,
            "sleep_minutes": sleep_minutes,
            "sleep_score": sleep_score,
            "active_calories": active_calories,
            "weekly_steps": weekly_steps,
            "weekly_sleep": weekly_sleep,
            "weekly_calories": weekly_calories
        }

        if weight:
            health_payload["weight"] = weight
            add_weight_entry(user_id, weight, note="Синхронизация из Apple Здоровье")

        upsert_user(user_id, {
            "health_data": health_payload,
            "last_health_sync": now_iso
        })

        return jsonify({
            "status": "ok",
            "message": "Данные успешно синхронизированы с Apple Здоровье",
            "health_data": health_payload
        })
    else:
        user_id = str(request.args.get("user_id") or "guest")
        user = get_user(user_id) or {}
        health_data = user.get("health_data")
        return jsonify({
            "status": "ok",
            "health_data": health_data
        })


@app.route("/api/health-shortcut", methods=["GET"])
def api_health_shortcut():
    """
    Конфигурация и метаданные для быстрого подключения через Apple Shortcuts.
    """
    active_url = os.environ.get("WEBAPP_URL", "").strip() or os.environ.get("RENDER_EXTERNAL_URL", "").strip() or WEBAPP_URL
    return jsonify({
        "shortcut_name": "OnlyFits Health Sync",
        "description": "Автоматическая синхронизация Apple Здоровье в OnlyFits",
        "webhook_url": f"{active_url}/api/health-sync",
        "supported_metrics": ["steps", "sleep_analysis", "active_energy", "body_mass"]
    })


@app.route("/<path:path>")
def static_proxy(path):
    """Раздача статических файлов (app.js, style.css, иконок)"""
    return send_from_directory("public", path)


# --- Логика Telegram-бота (Standard Library) ---

def call_telegram(method, payload=None):
    if not BOT_TOKEN:
        return None
    url = f"{TELEGRAM_API}/{method}"
    data = None
    headers = {}
    if payload:
        data = json.dumps(payload).encode("utf-8")
        headers["Content-Type"] = "application/json"

    req = urllib.request.Request(url, data=data, headers=headers)
    try:
        with urllib.request.urlopen(req, timeout=25) as resp:
            return json.loads(resp.read().decode("utf-8"))
    except Exception as e:
        print(f"[Telegram Bot] Ошибка {method}: {e}", file=sys.stderr)
        return None


def get_program_title(split_key):
    programs = load_programs()
    if split_key in programs:
        return programs[split_key].get("fullTitle") or programs[split_key].get("title")
    titles = {
        "classic_split_3": "Классический сплит (3 дня, Зал)",
        "classic_split_4": "Сплит по мышечным группам (4 дня, Зал)",
        "push_pull_legs": "Тяни / Толкай / Ноги (3 дня, Зал)",
        "push_pull_4": "Тяни / Толкай (4 дня, Зал)",
        "upper_lower_gym_4": "Верх / Низ (4 дня, Зал)",
        "upper_lower_gym_3": "Верх / Низ (3 дня, Зал)",
        "upper_lower_home_3": "Верх / Низ (3 дня, Дома)",
        "full_body": "Фуллбоди (3 дня, Все тело)",
        "full_body_start_2": "Фуллбоди Экспресс (2 дня, Все тело)"
    }
    return titles.get(split_key, "Верх / Низ (Upper / Lower)")


def handle_bot_message(msg):
    chat = msg.get("chat", {})
    chat_id = chat.get("id")
    text = (msg.get("text") or "").strip()
    from_user = msg.get("from", {})
    first_name = from_user.get("first_name", "Спортсмен")
    photo = msg.get("photo")
    web_app_data = msg.get("web_app_data")

    if not chat_id:
        return

    active_url = os.environ.get("WEBAPP_URL", "").strip() or os.environ.get("RENDER_EXTERNAL_URL", "").strip() or WEBAPP_URL
    uid = str(chat_id)
    user = get_user(uid)

    # Если пользователь прислал фото/скриншот тренировок в чат
    if photo:
        reply_photo = (
            "🏋️ <b>Получен скриншот программы тренировок!</b>\n\n"
            "OnlyFits умеет автоматически распознавать дни, упражнения, сеты и повторения из скриншота и формировать готовую программу для тренировок.\n\n"
            "Нажмите кнопку ниже, чтобы открыть приложение и импортировать программу 👇"
        )
        markup = {
            "inline_keyboard": [
                [
                    {
                        "text": "⚡️ Импортировать в OnlyFits",
                        "web_app": {"url": f"{active_url}?import_custom=1"}
                    }
                ]
            ]
        }
        call_telegram("sendMessage", {
            "chat_id": chat_id,
            "text": reply_photo,
            "parse_mode": "HTML",
            "reply_markup": markup
        })
        return

    # Экспорт данных из WebApp
    if web_app_data:
        call_telegram("sendMessage", {
            "chat_id": chat_id,
            "text": "🎉 <b>Данные сохранены в OnlyFits!</b> Продолжайте держать серию дней 🔥",
            "parse_mode": "HTML"
        })
        return

    # Проверка, не отправил ли пользователь значение веса числом (например "74.5" или "/weight 74.5" или "/вес 74.5")
    is_weight_msg = False
    weight_val = None

    cleaned_text = text.replace(",", ".")
    for prefix in ["/weight", "/вес", "вес:", "вес"]:
        if cleaned_text.lower().startswith(prefix):
            cleaned_text = cleaned_text[len(prefix):].strip()
            break

    try:
        val = float(cleaned_text)
        if 30.0 <= val <= 300.0:
            is_weight_msg = True
            weight_val = val
    except ValueError:
        pass

    if is_weight_msg and weight_val:
        now_dt = datetime.datetime.now()
        is_sunday = (now_dt.weekday() == 6)

        if not user or not user.get("is_registered"):
            # Создаем базовый профиль, если еще не был зарегистрирован
            user_data = {
                "user_id": uid,
                "first_name": first_name,
                "initial_weight": weight_val,
                "current_weight": weight_val,
                "height": 178,
                "age": 25,
                "gender": "male",
                "split": "upper_lower_gym_4",
                "goal": "muscle_gain",
                "is_registered": True,
                "registered_at": now_dt.strftime("%Y-%m-%d"),
                "weight_history": [
                    {
                        "date": now_dt.strftime("%Y-%m-%d"),
                        "weight": weight_val,
                        "diff_prev": 0.0,
                        "diff_initial": 0.0,
                        "is_sunday": is_sunday,
                        "note": "Зафиксирован через Telegram-бота"
                    }
                ]
            }
            upsert_user(uid, user_data)
            reply = (
                f"✅ <b>Начальный вес зафиксирован: {weight_val} кг!</b>\n\n"
                "Вы успешно зарегистрированы в OnlyFits.\n"
                "🏋️ <b>Программа по умолчанию:</b> Верх / Низ (Upper/Lower, 4 дня)\n"
                "📅 <b>Главное правило:</b> Каждое воскресенье присылайте актуальный вес для отслеживания динамики.\n\n"
                "Откройте приложение для настройки программы и просмотра тренировок 👇"
            )
        else:
            entry, err = add_weight_entry(uid, weight_val)
            init_w = user.get("initial_weight", weight_val)
            diff_initial = round(weight_val - init_w, 2)
            sign_init = "+" if diff_initial > 0 else ""

            if is_sunday:
                reply = (
                    f"🎉 <b>Воскресный замер веса зафиксирован!</b>\n\n"
                    f"⚖️ <b>Актуальный вес:</b> <b>{weight_val} кг</b>\n"
                    f"📉 <b>Разница за неделю:</b> {entry['diff_prev']:+.2f} кг\n"
                    f"🏆 <b>Всего с начала:</b> {sign_init}{diff_initial:.2f} кг (старт: {init_w} кг)\n\n"
                    "💪 Отличная работа! Ваш план и суточная норма калорий обновлены.\n"
                    "Следующий контрольный замер — в следующее воскресенье!"
                )
            else:
                sunday_info = get_sunday_info()
                reply = (
                    f"✅ <b>Актуальный вес обновлен: {weight_val} кг!</b>\n\n"
                    f"📊 Динамика с начального веса ({init_w} кг): <b>{sign_init}{diff_initial:.2f} кг</b>\n"
                    f"💡 <i>Напоминание: основной контрольный замер проводится каждое воскресенье (следующий: {sunday_info['next_sunday_formatted']}).</i>"
                )

        markup = {
            "inline_keyboard": [
                [
                    {
                        "text": "⚡️ Открыть OnlyFits",
                        "web_app": {"url": active_url}
                    }
                ]
            ]
        }
        call_telegram("sendMessage", {
            "chat_id": chat_id,
            "text": reply,
            "parse_mode": "HTML",
            "reply_markup": markup
        })
        return

    # Команда /start
    if text.startswith("/start"):
        now_dt = datetime.datetime.now()
        is_sunday = (now_dt.weekday() == 6)

        if user and user.get("is_registered"):
            init_w = user.get("initial_weight", 75.0)
            curr_w = user.get("current_weight", 75.0)
            diff_init = round(curr_w - init_w, 2)
            sign_init = "+" if diff_init > 0 else ""
            prog_name = get_program_title(user.get("split"))

            sunday_info = get_sunday_info()
            if is_sunday:
                last_weighed = user.get("last_sunday_weighed")
                if last_weighed == now_dt.strftime("%Y-%m-%d"):
                    sunday_status = f"✅ Замер на сегодня выполнен ({curr_w} кг)"
                else:
                    sunday_status = "⚠️ <b>Сегодня воскресенье!</b> Пора обновить актуальный вес"
            else:
                sunday_status = f"Следующее взвешивание: <b>{sunday_info['next_sunday_formatted']} (Вс)</b>"

            welcome = (
                f"⚡️ С возвращением, <b>{first_name}</b>!\n\n"
                f"🏋️ <b>Твоя программа:</b> {prog_name}\n"
                f"⚖️ <b>Вес:</b> Начальный <b>{init_w} кг</b> ➔ Актуальный <b>{curr_w} кг</b> ({sign_init}{diff_init:.2f} кг)\n"
                f"📅 <b>Воскресный замер:</b> {sunday_status}\n\n"
                "👇 Открой приложение для тренировок или отправь актуальный вес числом прямо в этот чат (например: <code>74.8</code>):"
            )
            btn_text = "⚡️ Открыть OnlyFits"
        else:
            welcome = (
                f"⚡️ Привет, <b>{first_name}</b>!\n\n"
                "Добро пожаловать в <b>OnlyFits</b> — твой персональный карманный тренер прямо внутри Telegram!\n\n"
                "📋 <b>Для старта пройдите быструю регистрацию:</b>\n"
                "1. Укажите начальный вес, рост и возраст\n"
                "2. Выберите тренировочную программу (Сплит, Тяни/Толкай, Верх/Низ, Фуллбоди)\n"
                "3. <b>Каждое воскресенье</b> обновляйте вес на актуальный для контроля формы!\n\n"
                "Нажмите кнопку ниже, чтобы начать 👇"
            )
            btn_text = "🚀 Начать регистрацию в OnlyFits"

        markup = {
            "inline_keyboard": [
                [
                    {
                        "text": btn_text,
                        "web_app": {"url": active_url}
                    }
                ],
                [
                    {
                        "text": "⚖️ Внести вес (числом)",
                        "callback_data": "log_weight_prompt"
                    },
                    {
                        "text": "ℹ️ Помощь",
                        "callback_data": "help_info"
                    }
                ]
            ]
        }
        call_telegram("sendMessage", {
            "chat_id": chat_id,
            "text": welcome,
            "parse_mode": "HTML",
            "reply_markup": markup
        })
        return

    elif text.startswith("/help"):
        help_msg = (
            "📖 <b>Как пользоваться OnlyFits:</b>\n\n"
            "1. <b>Регистрация:</b> откройте приложение и укажите начальный вес, рост, возраст и программу тренировок.\n"
            "2. <b>Воскресное взвешивание:</b> каждое воскресенье бот напомнит взвеситься. Вы можете просто прислать число в чат (например: <code>74.5</code>) или ввести вес в приложении.\n"
            "3. <b>Тренировки:</b> отмечайте сеты, рабочий вес и отдыхайте по встроенному таймеру (90с).\n"
            "4. <b>Питание:</b> отправляйте боту фото своей тарелки для мгновенного анализа КБЖУ нейросетью!"
        )
        call_telegram("sendMessage", {
            "chat_id": chat_id,
            "text": help_msg,
            "parse_mode": "HTML"
        })

    elif text.startswith("/sunday") or text.startswith("/weigh") or text.startswith("/замер"):
        sunday_info = get_sunday_info()
        user_w = user.get("current_weight", 75.0) if user else 75.0
        msg_text = (
            f"📅 <b>Воскресный замер веса</b>\n\n"
            f"Текущий зафиксированный вес: <b>{user_w} кг</b>\n"
            f"Следующее воскресенье: <b>{sunday_info['next_sunday_formatted']}</b>\n\n"
            "Чтобы зафиксировать актуальный вес, отправьте число в чат (например: <code>74.2</code>) или нажмите кнопку ниже:"
        )
        markup = {
            "inline_keyboard": [
                [
                    {
                        "text": "⚡️ Открыть форму взвешивания",
                        "web_app": {"url": active_url}
                    }
                ]
            ]
        }
        call_telegram("sendMessage", {
            "chat_id": chat_id,
            "text": msg_text,
            "parse_mode": "HTML",
            "reply_markup": markup
        })
        return

    elif text.startswith("/health") or text.startswith("/stats") or text.startswith("/здоровье"):
        health_data = user.get("health_data") if user else None
        if health_data and health_data.get("connected"):
            steps = health_data.get("steps", 8266)
            sleep_h = health_data.get("sleep_hours", 7)
            sleep_m = health_data.get("sleep_minutes", 45)
            cals = health_data.get("active_calories", 640)
            synced_at = health_data.get("synced_at", "сегодня")
            msg_text = (
                "🍏 <b>Статистика Apple Здоровье</b>\n\n"
                f"• 🚶‍♂️ Шаги за сегодня: <b>{steps:,}</b>\n".replace(",", " ") +
                f"• 😴 Ночной сон: <b>{sleep_h} ч {sleep_m} мин</b>\n"
                f"• 🔥 Активная энергия: <b>{cals} ккал</b>\n\n"
                f"🕒 Последняя синхронизация: {synced_at}\n\n"
                "Нажмите кнопку ниже, чтобы открыть подробные графики активности 👇"
            )
        else:
            msg_text = (
                "🍏 <b>Синхронизация с Apple Здоровье</b>\n\n"
                "OnlyFits автоматически принимает данные о вашей активности из приложения «Здоровье» на iPhone:\n"
                "• 🚶‍♂️ Шаги за сегодня\n"
                "• 😴 Продолжительность и фазы сна\n"
                "• 🔥 Сожженные активные калории\n"
                "• ⚖️ Вес из умных весов\n\n"
                "Нажмите кнопку ниже, чтобы предоставить доступ к данным 👇"
            )
        markup = {
            "inline_keyboard": [
                [
                    {
                        "text": "📊 Открыть статистику здоровья",
                        "web_app": {"url": f"{active_url}?tab=tab-stats"}
                    }
                ]
            ]
        }
        call_telegram("sendMessage", {
            "chat_id": chat_id,
            "text": msg_text,
            "parse_mode": "HTML",
            "reply_markup": markup
        })
        return


def sunday_reminder_loop():
    """
    Фоновый поток: каждое воскресенье утром напоминает зарегистрированным
    пользователям зафиксировать актуальный вес.
    """
    if not BOT_TOKEN:
        return

    print("[Sunday Reminder] Фоновый планировщик запущен...")
    while True:
        try:
            now = datetime.datetime.now()
            # 6 — воскресенье
            if now.weekday() == 6:
                today_str = now.strftime("%Y-%m-%d")
                users = load_users()
                active_url = os.environ.get("WEBAPP_URL", "").strip() or os.environ.get("RENDER_EXTERNAL_URL", "").strip() or WEBAPP_URL

                for uid, udata in users.items():
                    if not udata.get("is_registered"):
                        continue

                    # Проверяем, отправлялось ли уже напоминание сегодня или внесен ли уже вес
                    already_notified = (udata.get("last_sunday_reminder") == today_str)
                    already_weighed = (udata.get("last_sunday_weighed") == today_str)

                    if not already_notified and not already_weighed:
                        try:
                            cid = int(uid)
                        except ValueError:
                            continue

                        fname = udata.get("first_name", "Спортсмен")
                        init_w = udata.get("initial_weight", 75.0)
                        curr_w = udata.get("current_weight", 75.0)

                        reminder_text = (
                            f"🔔 <b>Доброе утро, {fname}! Сегодня воскресенье — день замера веса в OnlyFits!</b>\n\n"
                            "Каждое воскресенье мы фиксируем актуальный вес натощак для оценки прогресса и корректировки калорий.\n\n"
                            f"⚖️ Начальный вес: <b>{init_w} кг</b>\n"
                            f"📊 Предыдущий показатель: <b>{curr_w} кг</b>\n\n"
                            f"Отправьте ваш актуальный вес числом прямо в этот чат (например: <code>{curr_w}</code>) или откройте приложение 👇"
                        )
                        markup = {
                            "inline_keyboard": [
                                [
                                    {
                                        "text": "⚖️ Внести актуальный вес",
                                        "web_app": {"url": active_url}
                                    }
                                ]
                            ]
                        }
                        call_telegram("sendMessage", {
                            "chat_id": cid,
                            "text": reminder_text,
                            "parse_mode": "HTML",
                            "reply_markup": markup
                        })

                        udata["last_sunday_reminder"] = today_str
                        save_users(users)
                        time.sleep(0.5)

            # Проверяем каждые 15 минут
            time.sleep(900)
        except Exception as e:
            print(f"[Sunday Reminder] Ошибка планировщика: {e}", file=sys.stderr)
            time.sleep(60)


def bot_polling_loop():
    """Фоновый цикл Long Polling для Telegram-бота"""
    if not BOT_TOKEN:
        print("[Telegram Bot] Токен не задан. Бот ожидает TELEGRAM_BOT_TOKEN.", file=sys.stderr)
        return

    print("[Telegram Bot] Запуск OnlyFits фонового поллинга...")
    call_telegram("deleteWebhook")

    offset = 0
    while True:
        try:
            updates = call_telegram("getUpdates", {"offset": offset, "timeout": 20})
            if updates and updates.get("ok"):
                for item in updates.get("result", []):
                    offset = item["update_id"] + 1
                    if "message" in item:
                        handle_bot_message(item["message"])
                    elif "callback_query" in item:
                        cq = item["callback_query"]
                        cq_chat = cq.get("message", {}).get("chat", {}).get("id")
                        cq_data = cq.get("data", "")
                        if cq_chat:
                            active_url = os.environ.get("WEBAPP_URL", "").strip() or os.environ.get("RENDER_EXTERNAL_URL", "").strip() or WEBAPP_URL
                            if cq_data == "log_weight_prompt":
                                call_telegram("sendMessage", {
                                    "chat_id": cq_chat,
                                    "text": "⚖️ <b>Запись веса:</b> просто отправьте ваш текущий вес числом в ответном сообщении (например: <code>74.5</code>)!",
                                    "parse_mode": "HTML"
                                })
                            else:
                                call_telegram("sendMessage", {
                                    "chat_id": cq_chat,
                                    "text": "Используйте кнопку «⚡️ Открыть OnlyFits» для перехода к тренировкам и питанию!",
                                    "parse_mode": "HTML"
                                })
        except Exception as e:
            print(f"[Telegram Bot] Ошибка polling: {e}", file=sys.stderr)
            time.sleep(3)


def start_bot_background():
    """Запускает опрос бота и воскресный планировщик в фоновых потоках"""
    global _bot_started
    with _bot_lock:
        if not _bot_started and BOT_TOKEN:
            _bot_started = True
            bot_thread = threading.Thread(target=bot_polling_loop, daemon=True)
            bot_thread.start()

            sunday_thread = threading.Thread(target=sunday_reminder_loop, daemon=True)
            sunday_thread.start()


# Запуск бота в фоне
start_bot_background()


if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    print(f"🚀 OnlyFits запущен на порту {port}...")
    print(f"🔗 WebApp URL: {WEBAPP_URL}")
    app.run(host="0.0.0.0", port=port)
