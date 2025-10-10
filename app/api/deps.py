from typing import Annotated

from fastapi import Depends

from app.crud import BookCrud
from app.database import SessionDep


def get_book_service(db: SessionDep) -> BookCrud:
    """Dependency to get the BookCrud service."""
    return BookCrud(db)


Service = Annotated[BookCrud, Depends(get_book_service)]
