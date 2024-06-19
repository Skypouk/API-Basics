from fastapi import FastAPI, Request

from .database import Base, engine
from .routers.users import user_router

Base.metadata.create_all(bind=engine)

app = FastAPI(root_path="/api")

app.include_router(user_router)


@app.get("/")
def root(request: Request):
    return {"message": "Hello World", "root_path": request.scope.get("root_path")}
