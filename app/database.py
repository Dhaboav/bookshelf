import os
from typing import Annotated, Generator

from dotenv import load_dotenv
from fastapi import Depends
from sqlmodel import Session, SQLModel, create_engine

load_dotenv()
database_url = os.getenv("DATABASE_URL")
engine = create_engine(database_url)


def create_all_tables() -> None:
    """Create all tables in the database."""
    SQLModel.metadata.create_all(engine)


def close_db() -> None:
    """Close the database connection."""
    engine.dispose()


def get_db() -> Generator[Session, None, None]:
    """Get a database session for dependency injection."""

    with Session(engine) as session:
        try:
            yield session
        finally:
            session.close()


SessionDep = Annotated[Session, Depends(get_db)]
