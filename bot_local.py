#!/usr/bin/env python3
"""
Локальный запуск OnlyFits Telegram-бота и сервера.
Работает на стандартной библиотеке Python 3 + Flask.
"""

import os
import sys

# Загрузка переменных из .env
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

from main import app, start_bot_background, BOT_TOKEN, WEBAPP_URL

if __name__ == "__main__":
    if not BOT_TOKEN:
        print("\n" + "=" * 60)
        print("⚠️  Внимание: TELEGRAM_BOT_TOKEN не задан в .env!")
        print("Создайте файл .env со строкой: TELEGRAM_BOT_TOKEN=ваш_токен")
        print("=" * 60 + "\n")

    port = int(os.environ.get("PORT", 5000))
    print(f"🚀 OnlyFits запущен локально на http://localhost:{port}")
    print(f"🔗 WebApp URL: {WEBAPP_URL}")
    start_bot_background()
    app.run(host="0.0.0.0", port=port, debug=True)
