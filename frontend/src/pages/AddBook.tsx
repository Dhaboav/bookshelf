import { BookForm } from '@/components/books/BookForm';
import { Button } from '@/components/ui/Button';
import { useBookForm, type BookFormValues } from '@/hooks/useBookForm';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

const AddBook = () => {
    const navigate = useNavigate();

    // Gunakan hook useBookForm
    const { formData, handleChange, handleSubmit } = useBookForm({
        initialData: {
            title: '',
            author: '',
            genre: '',
            year: new Date().getFullYear(),
            description: '',
        },
        onSubmitCallback: (data) => {
            toast.success('Book added!');
            console.log('New Book Data:', data);
            navigate('/dashboard');
        },
    });

    return (
        <div className="min-h-screen bg-gray-50">
            <main className="container mx-auto max-w-2xl pt-24 pb-4">
                <Button variant="hover" onClick={() => navigate('/dashboard')} className="mb-4">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Library
                </Button>

                <BookForm
                    titleForm="Add New Book"
                    values={formData}
                    btnSaveTitle="Add Book"
                    onChange={(field, value) => handleChange(field as keyof BookFormValues, value)}
                    onSubmit={handleSubmit}
                    onCancel={() => navigate('/dashboard')}
                />
            </main>
        </div>
    );
};

export default AddBook;
