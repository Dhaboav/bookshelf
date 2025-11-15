import { BookDetail } from '@/components/books/BookDetail';
import { BookForm } from '@/components/books/BookForm';
import { BookLayout } from '@/components/layout/BookLayout';
import { useBookPage } from '@/hooks/useBookPage';

interface Props {
    mode: 'add' | 'edit' | 'detail';
}

export default function BookPage({ mode }: Props) {
    const { book, formData, handleSubmit, handleChange, handleDelete, goBack, notFound } =
        useBookPage(mode);

    if (notFound) {
        return (
            <BookLayout>
                <p className="mt-10 text-center text-red-500">Book not found.</p>
            </BookLayout>
        );
    }

    return (
        <BookLayout>
            {/* ADD & EDIT */}
            {mode !== 'detail' && (
                <BookForm
                    titleForm={mode === 'add' ? 'Add New Book' : 'Edit Book'}
                    values={formData}
                    btnSaveTitle={mode === 'add' ? 'Add Book' : 'Update Book'}
                    onChange={handleChange}
                    onSubmit={handleSubmit}
                    onCancel={goBack}
                />
            )}

            {/* DETAIL */}
            {mode === 'detail' && book && (
                <BookDetail
                    book={book}
                    onEdit={() => window.location.assign(`/book/edit/${book.id}`)}
                    onDelete={handleDelete}
                />
            )}
        </BookLayout>
    );
}
