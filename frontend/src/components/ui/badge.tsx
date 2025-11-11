import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

interface BadgeProps {
    children: ReactNode;
    textSize?: 'sm' | 'xs';
}

function Badge({ children, textSize = 'xs' }: BadgeProps) {
    return (
        <div
            className={cn(
                'inline-flex items-center rounded-full bg-gray-200 px-2.5 py-0.5 font-semibold text-black',
                textSize === 'sm' ? 'text-sm' : 'text-xs',
            )}
        >
            {children}
        </div>
    );
}

export { Badge };
