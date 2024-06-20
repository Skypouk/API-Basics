from .database import SessionLocal


# Dependency
def get_db():
    """
    A dependency that returns a Session to be used by crud modules
    """
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
