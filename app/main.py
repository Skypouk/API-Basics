from fastapi import FastAPI

from .database import Base, engine
from .routers.users import user_router

Base.metadata.create_all(bind=engine)

app = FastAPI()

app.include_router(user_router)


@app.get("/")
def root():
    return {"message": "Hello Bigger Applications!"}
