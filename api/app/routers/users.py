from typing import List

from fastapi import APIRouter, Depends, HTTPException, Security
from sqlalchemy.orm import Session

from app.crud.users import UserCRUD
from app.dependencies import get_db
from app.schemas import users
from app.auth.auth0_service import AuthService

auth = AuthService()

user_router = APIRouter(
    prefix="/users",
    tags=["users"],
    dependencies=[Depends(get_db)],
)


@user_router.post("/", response_model=users.User)
def create_user(user: users.UserCreate, db: Session = Depends(get_db), auth_result: str = Security(auth.verify, scopes=[])):
    db_user = UserCRUD.get_user_by_email(db, email=user.email)
    if db_user:
        raise HTTPException(status_code=400, detail="Email already registered")
    return UserCRUD.create_user(db=db, user=user)


@user_router.get("/", response_model=List[users.User])
def read_users(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    users = UserCRUD.get_users(db, skip=skip, limit=limit)
    return users


@user_router.get("/{user_id}", response_model=users.User)
def read_user(user_id: int, db: Session = Depends(get_db)):
    db_user = UserCRUD.get_user(db, user_id=user_id)
    if db_user is None:
        raise HTTPException(status_code=404, detail="User not found")
    return db_user
