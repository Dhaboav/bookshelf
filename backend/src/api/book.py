from fastapi import APIRouter
from src.api.deps import Service
from src.schema import Response, SchemaBook, SchemaPublicBook

router = APIRouter(tags=["Buku"])


@router.get("/books/", response_model=list[SchemaPublicBook])
def get_books(service: Service):
    return service.get_all_books()


@router.get("/book/{book_id}/", response_model=SchemaPublicBook)
def get_book(book_id: int, service: Service):
    book = service.get_book_by_id(book_id)
    if not book:
        return {"detail": "Tidak ada data buku yang tersedia"}

    return book


@router.post("/add-book/", response_model=Response)
def create_book(service: Service, book: SchemaBook):
    return service.create_book(book)


@router.patch("/update-book/{book_id}/", response_model=Response)
def update_book(service: Service, book_id: int, book: SchemaBook):
    return service.update_book(book_id, book)


@router.delete("/delete-book/{book_id}/", response_model=Response)
def delete_book(service: Service, book_id: int):
    return service.delete_book(book_id)
