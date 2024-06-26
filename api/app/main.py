from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from .database import Base, engine
from .routers.users import user_router


Base.metadata.create_all(bind=engine)

app = FastAPI(root_path="/api")

origins = [
    "http://localhost:4040",
    "https://skypouk.org"
]

# Add CORS middleware to the FastAPI application
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,  # List of allowed origins
    allow_credentials=True,
    allow_methods=["*"],  # Allow all HTTP methods
    allow_headers=["*"],  # Allow all headers
)

app.include_router(user_router)


@app.get("/")
def root(request: Request):
    return {"data": "Welcome to public page", "root_path": request.scope.get("root_path")}
