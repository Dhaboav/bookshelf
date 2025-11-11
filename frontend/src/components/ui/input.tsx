import { cn } from '@/lib/utils';
import type { InputHTMLAttributes } from 'react';

function Input({ className, type = 'text', ...props }: InputHTMLAttributes<HTMLInputElement>) {
    return (
        <input
            type={type}
            className={cn(
                'focus-visible:ring-primary flex h-10 w-full rounded-md border bg-gray-50 px-3 py-2 text-sm placeholder:text-gray-400 focus-visible:ring-2 focus-visible:outline-none',
                className,
            )}
            {...props}
        />
    );
}

export { Input };
