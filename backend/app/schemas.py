from pydantic import BaseModel


class TodoBase(BaseModel):
    title: str
    description: str | None = None
    completed: bool | None = False


class TodoCreate(TodoBase):
    pass


class TodoUpdate(TodoBase):
    pass


class TodoInDBBase(TodoBase):
    id: int

    class Config:
        from_attributes = True


class Todo(TodoInDBBase):
    pass
