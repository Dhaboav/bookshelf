from datetime import datetime

from pydantic import BaseModel, Field


class SchemaBook(BaseModel):
    """Schema for book data validation and serialization"""

    title: str
    genre: str
    author: str
    isbn: str = Field(..., max_length=13)


class SchemaPublicBook(BaseModel):
    """Schema for public book data serialization"""

    id: int
    title: str
    genre: str
    author: str
    isbn: str
    created_at: datetime
    last_updated: datetime


class Response(BaseModel):
    """Schema for public response"""

    detail: str
