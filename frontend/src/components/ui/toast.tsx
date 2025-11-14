import { Info, Trash2 } from 'lucide-react';
import { Toaster as Sonner, type ToasterProps } from 'sonner';

function Toaster({ ...props }: ToasterProps) {
    return (
        <Sonner
            icons={{
                success: <Info className="size-4" />,
                error: <Trash2 className="size-4" />,
            }}
            {...props}
        />
    );
}

export { Toaster };
