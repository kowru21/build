from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
import httpx
import uvicorn

app = FastAPI()

origins = [
    "83.220.174.203",
    "http://localhost:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

TELEGRAM_BOT_TOKEN = "7412655240:AAFge9LhGzjtBB0w3dk5TjAEz-E9UQ5TjYc"
TELEGRAM_CHAT_ID = "-1002473517556"

@app.post("/send-message/")
async def send_message(request: Request):
    try:
        form_data = await request.json()
        name = form_data.get("name", "Без имени")
        phone = form_data.get("phone", "Без телефона")
        extradata = form_data.get("extradata", [])

        message = f"Новая заявка:\nИмя: {name}\nТелефон: {phone}\n\nОтветы:\n"

        for idx, item in enumerate(extradata, start=1):
            answer = item.get('answer', 'Не указан')
            if isinstance(answer, list):
                answer = ', '.join(answer)
            message += f"{idx}) {item['question']} — {answer}\n"

        telegram_url = f"https://api.telegram.org/bot{TELEGRAM_BOT_TOKEN}/sendMessage"
        payload = {
            "chat_id": TELEGRAM_CHAT_ID,
            "text": message,
        }

        async with httpx.AsyncClient() as client:
            response = await client.post(telegram_url, json=payload)

        if response.status_code == 200:
            return {"success": True, "message": "Сообщение успешно отправлено"}
        else:
            return {"success": False, "message": response.json()}

    except Exception as e:
        return {"success": False, "message": str(e)}
