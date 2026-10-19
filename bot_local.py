#!/usr/bin/env python3
"""
Локальный запуск Telegram-бота через Long Polling.
Не требует установки сторонних библиотек (работает на чистом Python 3).

Для запуска:
1. Задайте BOT_TOKEN и WEBAPP_URL в файле .env (или в коде ниже)
2. Запустите: python3 bot_local.py
"""

import os
import sys
import time
import json
import urllib.request
import urllib.parse

# Загрузка переменных из .env (без сторонних библиотек)
def load_dotenv(env_path=".env"):
    if not os.path.exists(env_path):
        return
    with open(env_path, "r", encoding="utf-8") as f:
        for line in f:
            line = line.strip()
            if not line or line.startswith("#") or "=" not in line:
                continue
            k, v = line.split("=", 1)
            os.environ.setdefault(k.strip(), v.strip().strip('"').strip("'"))

load_dotenv()

BOT_TOKEN = os.environ.get("TELEGRAM_BOT_TOKEN", "")
WEBAPP_URL = os.environ.get("WEBAPP_URL", "https://your-app.vercel.app")

if not BOT_TOKEN:
    print("\n" + "=" * 60)
    print("⚠️  Внимание: TELEGRAM_BOT_TOKEN не задан!")
    print("1. Получите токен у @BotFather в Telegram")
    print("2. Создайте файл .env со строкой: TELEGRAM_BOT_TOKEN=ваш_токен")
    print("3. Либо передайте в консоли: export TELEGRAM_BOT_TOKEN=ваш_токен")
    print("=" * 60 + "\n")

API_BASE = f"https://api.telegram.org/bot{BOT_TOKEN}"


def call_api(method, payload=None):
    if not BOT_TOKEN:
        return None
    url = f"{API_BASE}/{method}"
    data = None
    headers = {}
    if payload:
        data = json.dumps(payload).encode("utf-8")
        headers["Content-Type"] = "application/json"

    req = urllib.request.Request(url, data=data, headers=headers)
    try:
        with urllib.request.urlopen(req, timeout=30) as resp:
            return json.loads(resp.read().decode("utf-8"))
    except Exception as e:
        print(f"Ошибка API [{method}]: {e}")
        return None


def handle_message(msg):
    chat = msg.get("chat", {})
    chat_id = chat.get("id")
    text = msg.get("text", "")
    from_user = msg.get("from", {})
    first_name = from_user.get("first_name", "друг")
    web_app_data = msg.get("web_app_data")

    if not chat_id:
        return

    # Ответ на экспорт корзины
    if web_app_data:
        call_api("sendMessage", {
            "chat_id": chat_id,
            "text": "🎉 <b>Список покупок успешно получен!</b>\nОткрывайте его во время покупок, чтобы вычеркивать купленные товары.",
            "parse_mode": "HTML"
        })
        return

    # Команда /start
    if text.startswith("/start"):
        welcome = (
            f"👋 Привет, <b>{first_name}</b>!\n\n"
            "Я — конструктор <b>персонального меню и умной корзины покупок</b>.\n\n"
            "✨ <b>Что умеет бот:</b>\n"
            "• Простые рецепты <b>до 30 минут</b>\n"
            "• Подбор под ваш бюджет и размер семьи\n"
            "• Учет ограничений (без лактозы, сахара, глютена, кето и др.)\n"
            "• Умный список покупок по отделам магазина без лишних трат\n\n"
            "Нажмите кнопку ниже, чтобы запустить приложение 👇"
        )
        markup = {
            "inline_keyboard": [
                [
                    {
                        "text": "🥗 Открыть конструктор меню",
                        "web_app": {"url": WEBAPP_URL}
                    }
                ],
                [
                    {
                        "text": "📖 Помощь",
                        "callback_data": "help_info"
                    }
                ]
            ]
        }
        call_api("sendMessage", {
            "chat_id": chat_id,
            "text": welcome,
            "parse_mode": "HTML",
            "reply_markup": markup
        })

    elif text.startswith("/help"):
        help_msg = (
            "💡 <b>Как составить меню:</b>\n\n"
            "1. Нажмите кнопку «🥗 Открыть конструктор меню».\n"
            "2. Выберите свою цель (похудение, экономия, ЗОЖ, набор массы).\n"
            "3. Укажите число едоков и недельный бюджет.\n"
            "4. Отметьте аллергии.\n"
            "5. Получите персональный рацион на 7 дней и готовый чек-лист продуктов!"
        )
        call_api("sendMessage", {
            "chat_id": chat_id,
            "text": help_msg,
            "parse_mode": "HTML"
        })


def main():
    if not BOT_TOKEN:
        print("Ожидание токена бота... Завершение работы.")
        return

    print("🤖 Проверка подключения к Telegram...")
    me = call_api("getMe")
    if not me or not me.get("ok"):
        print("❌ Не удалось подключиться к Telegram. Проверьте правильность TELEGRAM_BOT_TOKEN.")
        return

    bot_info = me.get("result", {})
    print(f"✅ Успешно! Бот @{bot_info.get('username')} запущен и слушает сообщения...")
    print(f"🔗 Ссылка на WebApp: {WEBAPP_URL}")
    print("Нажмите Ctrl+C для остановки.\n")

    # Сброс вебхука перед поллингом
    call_api("deleteWebhook")

    offset = 0
    while True:
        try:
            updates = call_api("getUpdates", {"offset": offset, "timeout": 20})
            if updates and updates.get("ok"):
                for item in updates.get("result", []):
                    offset = item["update_id"] + 1
                    if "message" in item:
                        handle_message(item["message"])
                    elif "callback_query" in item:
                        cb = item["callback_query"]
                        cq_chat = cb.get("message", {}).get("chat", {}).get("id")
                        if cq_chat:
                            call_api("sendMessage", {
                                "chat_id": cq_chat,
                                "text": "Используйте кнопку «🥗 Открыть конструктор меню», чтобы запустить приложение!",
                                "parse_mode": "HTML"
                            })
        except KeyboardInterrupt:
            print("\nБот остановлен пользователем.")
            break
        except Exception as e:
            print(f"Ошибка в цикле polling: {e}")
            time.sleep(2)


if __name__ == "__main__":
    main()
