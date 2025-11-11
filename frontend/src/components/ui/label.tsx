import { cn } from '@/lib/utils';
import type { LabelHTMLAttributes } from 'react';

function Label({ className, ...props }: LabelHTMLAttributes<HTMLLabelElement>) {
    return <label className={cn('text-sm font-medium', className)} {...props} />;
}

export { Label };
