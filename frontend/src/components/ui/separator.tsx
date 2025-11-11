import { cn } from '@/lib/utils';
import type { HTMLAttributes } from 'react';

function Separator({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
    return <div className={cn('bg-border h-px w-full shrink-0', className)} {...props} />;
}

export { Separator };
