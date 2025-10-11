from typing import Optional

from sqlmodel import Session, select
from src.model import Book
from src.schema import Response, SchemaBook


class BookCrud:
    def __init__(self, db: Session):
        self.db = db

    def get_all_books(self):
        """Retrieve all books data"""
        return self.db.exec(select(Book)).all()

    def get_book_by_id(self, book_id: int) -> Optional[Book]:
        """Retrieve a book by its ID"""
        return self.db.get(Book, book_id)

    def create_book(self, book_data: SchemaBook) -> Response:
        """Create a new book entry"""

        is_book_exist = self.db.exec(
            select(Book).where(Book.isbn == book_data.isbn)
        ).first()
        if is_book_exist:
            return Response(detail="Buku dengan ISBN ini sudah terdaftar")

        new_book = Book.model_validate(book_data)
        self.db.add(new_book)
        self.db.commit()
        self.db.refresh(new_book)
        return Response(detail="Buku berhasil terdaftar")

    def update_book(self, book_id: int, book_data: SchemaBook) -> Response:
        """Update an existing book entry"""

        book = self.get_book_by_id(book_id)
        if not book:
            return Response(detail="Tidak ada data buku yang tersedia")

        book_updates = book_data.model_dump(exclude_unset=True)
        for key, value in book_updates.items():
            setattr(book, key, value)

        self.db.add(book)
        self.db.commit()
        self.db.refresh(book)
        return Response(detail="Data buku berhasil diperbarui")

    def delete_book(self, book_id: int) -> Response:
        """Delete a book entry"""

        book = self.get_book_by_id(book_id)
        if not book:
            return Response(detail="Tidak ada data buku yang tersedia")

        self.db.delete(book)
        self.db.commit()
        return Response(detail="Berhasil menghapus data buku")
