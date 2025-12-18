import os
import httpx
import base64
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv

load_dotenv()

CLIENT_ID = os.getenv("SPOTIFY_CLIENT_ID")
CLIENT_SECRET = os.getenv("SPOTIFY_CLIENT_SECRET")
REDIRECT_URI = os.getenv("SPOTIFY_REDIRECT_URI")

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"status": "hey pretty lady!"}




async def get_spotify_token():
    auth_string = f"{CLIENT_ID}:{CLIENT_SECRET}"
    auth_bytes = auth_string.encode("utf-8")
    auth_base64 = str(base64.b64encode(auth_bytes), "utf-8")

    url = "https://accounts.spotify.com/api/token"
    headers = {
        "Authorization": "Basic " + auth_base64,
        "Content-Type": "application/x-www-form-urlencoded"
    }
    data = {"grant_type": "client_credentials"}

    async with httpx.AsyncClient() as client:
        response = await client.post(url, headers=headers, data=data)
        return response.json()["access_token"]

@app.get("/test-albums")
async def get_test_albums():
    token = await get_spotify_token()
    query_list = ["Discovery Daft Punk", "After Hours The Weeknd", "Currents Tame Impala"]
    results = []

    async with httpx.AsyncClient() as client:
        for query in query_list:
            response = await client.get(
                "https://api.spotify.com/v1/search",
                headers={"Authorization": f"Bearer {token}"},
                params={"q": query, "type": "album", "limit": 1}
            )
            data = response.json()
            album = data["albums"]["items"][0]
            results.append({
                "id": album["id"],
                "name": album["name"],
                "artist": album["artists"][0]["name"],
                "image": album["images"][0]["url"]
            })
    
    print(token)

    return results