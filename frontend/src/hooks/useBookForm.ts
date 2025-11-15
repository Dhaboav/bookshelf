import type { Book } from '@/types/book';
import { useState } from 'react';

export type BookFormValues = Omit<Book, 'id' | 'cover'>;

interface UseBookFormOptions {
    initialData: BookFormValues;
    onSubmitCallback?: (data: BookFormValues) => void;
}

export function useBookForm({ initialData, onSubmitCallback }: UseBookFormOptions) {
    const [values, setValues] = useState<BookFormValues>(initialData);

    const handleChange = <K extends keyof BookFormValues>(field: K, value: BookFormValues[K]) => {
        setValues((prev) => ({ ...prev, [field]: value }));
    };

    const handleSubmit = () => {
        if (onSubmitCallback) onSubmitCallback(values);
    };

    const resetForm = () => setValues(initialData);

    return {
        formData: values,
        handleChange,
        handleSubmit,
        resetForm,
        setValues, // opsional
    };
}
