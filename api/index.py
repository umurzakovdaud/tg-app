"""
Vercel Serverless Function & Telegram Webhook Handler
Supports standard WSGI/ASGI or HTTP handler for Vercel
"""

import json
import os
import urllib.request
import urllib.parse
from http.server import BaseHTTPRequestHandler

# Configurations
BOT_TOKEN = os.environ.get("TELEGRAM_BOT_TOKEN", "")
WEBAPP_URL = os.environ.get("WEBAPP_URL", "")

TELEGRAM_API_URL = f"https://api.telegram.org/bot{BOT_TOKEN}" if BOT_TOKEN else ""


def send_telegram_message(chat_id, text, reply_markup=None):
    """Send message via Telegram Bot API using standard library"""
    if not BOT_TOKEN:
        return None

    url = f"{TELEGRAM_API_URL}/sendMessage"
    payload = {
        "chat_id": chat_id,
        "text": text,
        "parse_mode": "HTML"
    }
    if reply_markup:
        payload["reply_markup"] = reply_markup

    data = json.dumps(payload).encode("utf-8")
    req = urllib.request.Request(
        url,
        data=data,
        headers={"Content-Type": "application/json"}
    )
    try:
        with urllib.request.urlopen(req, timeout=5) as response:
            return json.loads(response.read().decode("utf-8"))
    except Exception as e:
        print(f"Error sending telegram message: {e}")
        return None


def handle_telegram_update(update):
    """Processes incoming Telegram updates from webhook"""
    message = update.get("message", {})
    chat = message.get("chat", {})
    chat_id = chat.get("id")
    text = message.get("text", "")
    web_app_data = message.get("web_app_data", {})

    if not chat_id:
        return

    # If user exported cart from WebApp
    if web_app_data:
        data_str = web_app_data.get("data", "")
        reply = (
            "🎉 <b>Список покупок успешно получен!</b>\n\n"
            "Вы можете открыть его в конструкторе или вычеркивать позиции во время похода в магазин."
        )
        send_telegram_message(chat_id, reply)
        return

    # Commands
    if text.startswith("/start"):
        first_name = message.get("from", {}).get("first_name", "друг")
        welcome_text = (
            f"👋 Привет, <b>{first_name}</b>!\n\n"
            "Я помогу тебе составить <b>персональное меню на неделю</b> и собрать <b>точный список продуктов</b>:\n\n"
            "⏱ Рецепты до 30 минут\n"
            "💰 Под твой бюджет и размер семьи\n"
            "🚫 Учет аллергий (без лактозы, сахара, глютена, кето и др.)\n"
            "🛒 Список покупок без лишних трат и выброса еды\n\n"
            "Нажми кнопку ниже, чтобы открыть конструктор 👇"
        )
        
        # WebApp Button
        keyboard = {
            "inline_keyboard": [
                [
                    {
                        "text": "🥗 Открыть конструктор меню",
                        "web_app": {"url": WEBAPP_URL or "https://your-domain.vercel.app"}
                    }
                ],
                [
                    {
                        "text": "ℹ️ Как это работает?",
                        "callback_data": "help"
                    }
                ]
            ]
        }
        send_telegram_message(chat_id, welcome_text, reply_markup=keyboard)

    elif text.startswith("/help"):
        help_text = (
            "📖 <b>Как пользоваться сервисом:</b>\n\n"
            "1. Нажмите <b>«Открыть конструктор меню»</b>.\n"
            "2. Укажите цель (похудение, экономия, баланс, набор массы).\n"
            "3. Выберите количество человек в семье и недельный бюджет.\n"
            "4. Отметьте аллергии или ограничения.\n"
            "5. Получите готовый рацион на 7 дней и умный список покупок по отделам магазина!"
        )
        send_telegram_message(chat_id, help_text)


class handler(BaseHTTPRequestHandler):
    """Vercel Python Serverless HTTP Request Handler"""

    def do_GET(self):
        self.send_response(200)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Access-Control-Allow-Origin", "*")
        self.end_headers()

        response = {
            "status": "online",
            "service": "Smart Meal Planner & Grocery Cart API",
            "version": "1.0.0",
            "bot_configured": bool(BOT_TOKEN),
            "webapp_configured": bool(WEBAPP_URL)
        }
        self.wfile.write(json.dumps(response, ensure_ascii=False).encode("utf-8"))

    def do_POST(self):
        content_length = int(self.headers.get("Content-Length", 0))
        body = self.rfile.read(content_length)

        try:
            update = json.loads(body.decode("utf-8"))
            handle_telegram_update(update)
            status_code = 200
            response = {"ok": True}
        except Exception as e:
            status_code = 400
            response = {"ok": False, "error": str(e)}

        self.send_response(status_code)
        self.send_header("Content-Type", "application/json")
        self.send_header("Access-Control-Allow-Origin", "*")
        self.end_headers()
        self.wfile.write(json.dumps(response).encode("utf-8"))
