from pyrogram import Client, filters
import os
from config import BOT_TOKEN

API_ID = int(os.getenv("API_ID", "20533795"))
API_HASH = os.getenv("API_HASH", "f6cadf28523943f525e706e6ace8a250")

app = Client(
    "skull_game_bot",
    api_id=API_ID,
    api_hash=API_HASH,
    bot_token=BOT_TOKEN
)

@app.on_message(filters.command("start"))
async def start(client, message):
    await message.reply_text("Welcome to Skull Game! Type /play to start.")

@app.on_message(filters.command("play"))
async def play(client, message):
    game_url = "https://skull-game-3ac8ada54611.herokuapp.com/"
    await message.reply_text(f"Click below to play!\n[Play Now]({game_url})", disable_web_page_preview=True)

app.run()