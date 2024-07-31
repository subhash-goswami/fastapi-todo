from sqlalchemy.orm import Session
from . import models, schemas


def get_todos(db: Session):
    return db.query(models.TodoItem).all()


def get_todo_by_id(db: Session, todo_id: int):
    return db.query(models.TodoItem).filter(models.TodoItem.id == todo_id).first()


def create_todo(db: Session, todo: schemas.TodoCreate):
    db_todo = models.TodoItem(**todo.dict())
    db.add(db_todo)
    db.commit()
    db.refresh(db_todo)
    return db_todo


def update_todo(db: Session, todo_id: int, todo: schemas.TodoUpdate):
    db_todo = get_todo_by_id(db, todo_id)
    if db_todo:
        for key, value in todo.dict().items():
            setattr(db_todo, key, value)
        db.commit()
        db.refresh(db_todo)
        return db_todo
    return None


def delete_todo(db: Session, todo_id: int):
    db_todo = get_todo_by_id(db, todo_id)
    if db_todo:
        db.delete(db_todo)
        db.commit()
        return db_todo
    return None
