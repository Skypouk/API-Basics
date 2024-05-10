from sqlalchemy.orm import Session

from app.models import users as user_model
from app.schemas import users as user_schema


class UserCRUD:
    @staticmethod
    def get_user(db: Session, user_id: int):
        return db.query(user_model.User).filter(user_model.User.id == user_id).first()

    @staticmethod
    def get_user_by_email(db: Session, email: str):
        return db.query(user_model.User).filter(user_model.User.email == email).first()

    @staticmethod
    def get_users(db: Session, skip: int = 0, limit: int = 100):
        return db.query(user_model.User).offset(skip).limit(limit).all()

    @staticmethod
    def create_user(db: Session, user: user_schema.UserCreate):
        fake_hashed_password = user.password + "notreallyhashed"
        db_user = user_model.User(
            email=user.email, hashed_password=fake_hashed_password
        )
        db.add(db_user)
        db.commit()
        db.refresh(db_user)
        return db_user
