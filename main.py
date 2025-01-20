from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
import httpx

app = FastAPI()

origins = [
    "http://localhost:5173",  # Ваш React-приложение локально
    "83.220.174.203", # Альтернативный локальный адрес
]

# Настройка CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,  # Передаём список разрешённых доменов
    allow_credentials=True, # Разрешить использование cookies и авторизации
    allow_methods=["*"],    # Разрешить все методы HTTP (GET, POST и т.д.)
    allow_headers=["*"]     # Разрешить все заголовки
)


# Телеграм-бот токен и ID чата
TELEGRAM_BOT_TOKEN = "7412655240:AAFge9LhGzjtBB0w3dk5TjAEz-E9UQ5TjYc"
TELEGRAM_CHAT_ID = "123948691"

@app.post("/send-message/")
async def send_message(request: Request):
    try:
        # Получение данных из формы
        form_data = await request.json()
        name = form_data.get("name", "Без имени")
        phone = form_data.get("phone", "Без телефона")

        # Формирование сообщения для Telegram
        message = f"Новая заявка:\nИмя: {name}\nТелефон: {phone}"

        # Отправка сообщения в Telegram
        url = f"https://api.telegram.org/bot{TELEGRAM_BOT_TOKEN}/sendMessage"
        payload = {
            "chat_id": TELEGRAM_CHAT_ID,
            "text": message,
        }

        async with httpx.AsyncClient() as client:
            response = await client.post(url, json=payload)
            if response.status_code == 200:
                return {"success": True, "message": "Сообщение успешно отправлено"}
            else:
                return {"success": False, "message": "Не удалось отправить сообщение"}

    except Exception as e:
        return {"success": False, "message": f"Произошла ошибка: {str(e)}"}


if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)