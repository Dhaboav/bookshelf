from pydantic import BaseModel, Field


class SchemaBook(BaseModel):
    """Schema for book data validation and serialization"""

    title: str
    genre: str
    author: str
    isbn: str = Field(..., max_length=13)


class Response(BaseModel):
    """Schema for public response"""

    detail: str
