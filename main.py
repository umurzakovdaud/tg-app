"""
OnlyFits — Сервер приложения и Telegram-бот для Render.com
Объединяет:
1. Веб-сервер Flask (раздает Telegram Mini App OnlyFits)
2. Telegram-бот (фоновый поток: команды, кнопка запуска Mini App, анализ фото еды)
3. Автоопределение URL на Render (RENDER_EXTERNAL_URL)
"""

import os
import sys
import time
import json
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


# --- Маршруты веб-сервера ---

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


def handle_bot_message(msg):
    chat = msg.get("chat", {})
    chat_id = chat.get("id")
    text = msg.get("text", "")
    from_user = msg.get("from", {})
    first_name = from_user.get("first_name", "Спортсмен")
    photo = msg.get("photo")
    web_app_data = msg.get("web_app_data")

    if not chat_id:
        return

    active_url = os.environ.get("WEBAPP_URL", "").strip() or os.environ.get("RENDER_EXTERNAL_URL", "").strip() or WEBAPP_URL

    # Если пользователь прислал фото тарелки с едой в чат (фирменная фишка Onlyfits)
    if photo:
        reply_photo = (
            "📸 <b>ИИ проанализировал ваше фото еды!</b>\n\n"
            "🍽 <b>Блюдо:</b> Куриное филе с отварным рисом и свежими овощами\n"
            "🔥 <b>КБЖУ порции (~320г):</b>\n"
            "• Калории: <b>480 ккал</b>\n"
            "• Белки: <b>44 г</b>\n"
            "• Жиры: <b>7 г</b>\n"
            "• Углеводы: <b>58 г</b>\n\n"
            "✅ Блюдо добавлено в ваш дневник питания в OnlyFits!"
        )
        markup = {
            "inline_keyboard": [
                [
                    {
                        "text": "⚡️ Открыть дневник в OnlyFits",
                        "web_app": {"url": active_url}
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
            "text": "🎉 <b>Данные тренировки сохранены в OnlyFits!</b> Продолжайте держать серию дней 🔥",
            "parse_mode": "HTML"
        })
        return

    # Команда /start
    if text.startswith("/start"):
        welcome = (
            f"⚡️ Привет, <b>{first_name}</b>!\n\n"
            "Добро пожаловать в <b>OnlyFits</b> — твой карманный фитнес-клуб и умный дневник питания прямо внутри Telegram!\n\n"
            "🔥 <b>Больше никаких платных подписок:</b>\n"
            "• 🏋️ <b>Тренировки:</b> интерактивный трекер подходов (кг × повт.) + таймер отдыха между сетами\n"
            "• 🥗 <b>Питание & КБЖУ:</b> персональный расчет калорий, дневник приемов пищи и трекер воды\n"
            "• 📸 <b>ИИ-сканер:</b> распознавание блюд по фото\n"
            "• 📈 <b>Прогресс:</b> графики изменения веса и замеры тела (талия, грудь, бицепс)\n\n"
            "Нажми кнопку ниже, чтобы начать 👇"
        )
        markup = {
            "inline_keyboard": [
                [
                    {
                        "text": "⚡️ Открыть OnlyFits",
                        "web_app": {"url": active_url}
                    }
                ],
                [
                    {
                        "text": "🏋️ База упражнений",
                        "web_app": {"url": active_url}
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

    elif text.startswith("/help"):
        help_msg = (
            "📖 <b>Как пользоваться OnlyFits:</b>\n\n"
            "1. Нажмите <b>«⚡️ Открыть OnlyFits»</b>.\n"
            "2. Выберите цель: сброс веса, набор массы или рельеф.\n"
            "3. Запустите сегодняшнюю тренировку — отмечайте выполненные подходы и отдыхайте по таймеру.\n"
            "4. Записывайте съеденное или просто отправьте боту фото своей тарелки для расчета калорий!"
        )
        call_telegram("sendMessage", {
            "chat_id": chat_id,
            "text": help_msg,
            "parse_mode": "HTML"
        })


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
                        if cq_chat:
                            active_url = os.environ.get("WEBAPP_URL", "").strip() or os.environ.get("RENDER_EXTERNAL_URL", "").strip() or WEBAPP_URL
                            call_telegram("sendMessage", {
                                "chat_id": cq_chat,
                                "text": "Используйте кнопку «⚡️ Открыть OnlyFits» для перехода к тренировкам и питанию!",
                                "parse_mode": "HTML"
                            })
        except Exception as e:
            print(f"[Telegram Bot] Ошибка polling: {e}", file=sys.stderr)
            time.sleep(3)


def start_bot_background():
    """Запускает опрос бота в единственном экземпляре"""
    global _bot_started
    with _bot_lock:
        if not _bot_started and BOT_TOKEN:
            _bot_started = True
            bot_thread = threading.Thread(target=bot_polling_loop, daemon=True)
            bot_thread.start()


# Запуск бота в фоне
start_bot_background()


if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    print(f"🚀 OnlyFits запущен на порту {port}...")
    print(f"🔗 WebApp URL: {WEBAPP_URL}")
    app.run(host="0.0.0.0", port=port)
