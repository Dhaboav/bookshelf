import { sampleBooks } from '@/demos/books';
import { useBookForm, type BookFormValues } from '@/hooks/useBookForm';
import { useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'sonner';

export function useBookPage(mode: 'add' | 'edit' | 'detail') {
    const { id } = useParams();
    const navigate = useNavigate();

    // ====== GET BOOK ======
    const book = useMemo(() => {
        return id ? sampleBooks.find((b) => b.id === id) || null : null;
    }, [id]);

    const notFound = (mode === 'edit' || mode === 'detail') && !book;

    // ====== INITIAL FORM VALUES ======
    const initialForm: BookFormValues = {
        title: book?.title || '',
        author: book?.author || '',
        genre: book?.genre || '',
        year: book?.year || new Date().getFullYear(),
        description: book?.description || '',
    };

    // ====== FORM HOOK ======
    const { formData, handleChange, handleSubmit } = useBookForm({
        initialData: initialForm,
        onSubmitCallback: (_data) => {
            toast.success(
                mode === 'add'
                    ? `Book "${_data.title ?? 'untitled'}" added successfully!`
                    : `Book "${book?.title ?? 'untitled'}" updated successfully!`,
            );
            console.log('Submitted data:', _data);
            navigate(mode === 'add' ? '/dashboard' : `/book/detail/${book?.id}`);
        },
    });

    // ====== ACTIONS ======
    const handleDelete = () => {
        if (!book) return;
        toast.error(`Book "${book.title}" deleted`);
        navigate('/dashboard');
    };

    const goBack = () => {
        navigate(mode === 'add' ? '/dashboard' : `/book/detail/${book?.id}`);
    };

    return {
        id,
        book,
        formData,
        handleChange,
        handleSubmit,
        handleDelete,
        goBack,
        notFound,
    };
}
