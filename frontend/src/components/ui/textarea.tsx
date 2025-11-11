import { cn } from '@/lib/utils';
import type { TextareaHTMLAttributes } from 'react';

function Textarea({ className, ...props }: TextareaHTMLAttributes<HTMLTextAreaElement>) {
    return (
        <textarea
            className={cn(
                'focus-visible:ring-primary flex min-h-20 w-full rounded-md border bg-gray-50 px-3 py-2 text-sm placeholder:text-gray-400 focus-visible:ring-2 focus-visible:outline-none',
                className,
            )}
            {...props}
        />
    );
}

export { Textarea };
