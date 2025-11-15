import { BookForm } from '@/components/books/BookForm';
import { Button } from '@/components/ui/Button';
import type { BookFormValues } from '@/hooks/useBookForm';
import { useBookForm } from '@/hooks/useBookForm';
import { ArrowLeft } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'sonner';

// Sample book data - nanti bisa diganti fetch API by ID
const sampleBooks: (BookFormValues & { id: string })[] = [
    {
        id: '1',
        title: 'The Midnight Library',
        author: 'Matt Haig',
        genre: 'Fiction',
        year: 2020,
        description: 'A dazzling novel about all the choices that go into a life well lived.',
    },
];

const EditBook = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();

    const book = sampleBooks.find((b) => b.id === id);

    // Gunakan hook useBookForm untuk logic
    const { formData, handleChange, handleSubmit } = useBookForm({
        initialData: {
            title: book?.title || '',
            author: book?.author || '',
            genre: book?.genre || '',
            year: book?.year || new Date().getFullYear(),
            description: book?.description || '',
        },
        onSubmitCallback: (data) => {
            toast.success('Book updated successfully!');
            console.log('Updated book:', data);
            navigate(`/book/${id}`);
        },
    });

    return (
        <div className="min-h-screen bg-gray-50">
            <main className="container mx-auto max-w-2xl px-4 pt-24 pb-12">
                <Button variant="hover" onClick={() => navigate(`/book/${id}`)} className="mb-6">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Book
                </Button>

                <BookForm
                    titleForm="Edit Book"
                    values={formData}
                    btnSaveTitle="Update Book"
                    onChange={(field, value) => handleChange(field as keyof BookFormValues, value)}
                    onSubmit={handleSubmit}
                    onCancel={() => navigate(`/book/${id}`)}
                />
            </main>
        </div>
    );
};

export default EditBook;
