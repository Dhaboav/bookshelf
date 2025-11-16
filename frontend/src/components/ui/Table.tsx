import { cn } from '@/lib/utils';
import type { HTMLAttributes } from 'react';

function Table({ className, children }: HTMLAttributes<HTMLTableElement>) {
    return (
        <div className="relative w-full overflow-auto">
            <table className={cn('w-full caption-bottom text-sm', className)}>{children}</table>
        </div>
    );
}

function TableHeader({ className, children }: HTMLAttributes<HTMLTableSectionElement>) {
    return <thead className={cn('border-b', className)}>{children}</thead>;
}

function TableBody({ className, children }: HTMLAttributes<HTMLTableSectionElement>) {
    return <tbody className={cn('', className)}>{children}</tbody>;
}

function TableFooter({ className, children }: HTMLAttributes<HTMLTableSectionElement>) {
    return <tfoot className={cn('bg-muted/50 border-t font-medium', className)}>{children}</tfoot>;
}

function TableRow({ className, children }: HTMLAttributes<HTMLTableRowElement>) {
    return (
        <tr className={cn('hover:bg-muted/50 border-b transition-colors', className)}>
            {children}
        </tr>
    );
}

function TableHead({ className, children }: HTMLAttributes<HTMLTableCellElement>) {
    return (
        <th className={cn('text-muted-foreground h-12 px-4 text-left font-medium', className)}>
            {children}
        </th>
    );
}

function TableCell({ className, children }: HTMLAttributes<HTMLTableCellElement>) {
    return <td className={cn('p-4', className)}>{children}</td>;
}

function TableCaption({ className, children }: HTMLAttributes<HTMLTableCaptionElement>) {
    return (
        <caption className={cn('text-muted-foreground mt-4 text-center text-sm', className)}>
            {children}
        </caption>
    );
}

export { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow };
