from datetime import datetime, timezone

from pydantic import BaseModel, Field, field_serializer


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

    @field_serializer("created_at", "last_updated")
    def serialize_dt(self, value: datetime, _info):
        return value.astimezone(timezone.utc).isoformat().replace("+00:00", "Z")

    class Config:
        from_attributes = True


class Response(BaseModel):
    """Schema for public response"""

    detail: str
