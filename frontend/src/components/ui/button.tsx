import { cn } from '@/lib/utils';
import { Slot } from '@radix-ui/react-slot';
import type { ButtonHTMLAttributes, ReactNode } from 'react';

const variantClasses = {
    default: 'bg-primary text-white hover:bg-blue-700',
    delete: 'bg-red-600 text-white hover:bg-red-700',
    outline: 'border border-secondary border-2 hover:bg-secondary hover:text-white',
    hover: 'hover:bg-secondary hover:text-white',
} as const;

const sizeClasses = {
    default: 'h-10 px-4 py-2',
    sm: 'h-9 rounded-md px-3',
    lg: 'h-11 rounded-md px-8',
    icon: 'h-10 w-10',
} as const;

type ButtonVariant = keyof typeof variantClasses;
type ButtonSize = keyof typeof sizeClasses;

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    size?: ButtonSize;
    asChild?: boolean;
    children: ReactNode;
}

function Button({
    children,
    className,
    variant = 'default',
    size = 'default',
    asChild = false,
    ...props
}: ButtonProps) {
    const Comp = asChild ? Slot : 'button';
    const classes = cn(
        'inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium',
        variantClasses[variant],
        sizeClasses[size],
        className,
    );

    return (
        <Comp className={classes} {...props}>
            {children}
        </Comp>
    );
}

export { Button };
