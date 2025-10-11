from datetime import datetime, timezone
from typing import Optional

from sqlmodel import Column, DateTime, Field, SQLModel


def _utcnow():
    """Return timezone-aware UTC datetime."""
    return datetime.now(timezone.utc)


class Book(SQLModel, table=True):
    """Table model for storing book information."""

    id: Optional[int] = Field(default=None, primary_key=True)
    title: str = Field(index=True, max_length=255)
    genre: str = Field(default=None, max_length=255)
    author: str = Field(default=None, max_length=255)
    isbn: str = Field(default=None, max_length=13, unique=True)
    created_at: Optional[datetime] = Field(
        default_factory=_utcnow,
        sa_column=Column(DateTime(timezone=True), nullable=False, default=_utcnow),
    )

    last_updated: Optional[datetime] = Field(
        default_factory=_utcnow,
        sa_column=Column(
            DateTime(timezone=True), nullable=False, default=_utcnow, onupdate=_utcnow
        ),
    )
