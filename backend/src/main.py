from contextlib import asynccontextmanager

from fastapi import FastAPI

from src.api.book import router
from src.database import close_db, create_all_tables


@asynccontextmanager
async def lifespan(app: FastAPI):
    create_all_tables()
    yield
    close_db()


app = FastAPI(lifespan=lifespan)
app.include_router(router)


@app.get("/")
def index():
    return {"status": "ok"}
