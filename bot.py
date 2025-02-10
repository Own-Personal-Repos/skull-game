from pyrogram import Client, filters
from config import BOT_TOKEN

app = Client("skull_game_bot", bot_token=BOT_TOKEN)

@app.on_message(filters.command("start"))
async def start(client, message):
    await message.reply_text("Welcome to Skull Game! Type /play to start.")

@app.on_message(filters.command("play"))
async def play(client, message):
    game_url = "https://skull-game-3ac8ada54611.herokuapp.com/"
    await message.reply_text(f"Click below to play!\n[Play Now]({game_url})", disable_web_page_preview=True)

app.run()
