import { Button } from '@/components/ui/Button';
import { ArrowLeft } from 'lucide-react';
import type { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

interface BookLayoutProps {
    children: ReactNode;
}

function BookLayout({ children }: BookLayoutProps) {
    const navigate = useNavigate();
    return (
        <div className="min-h-screen bg-gray-50">
            <div className="container mx-auto max-w-2xl pt-24 pb-4">
                <Button variant="hover" className="mb-4" onClick={() => navigate('/dashboard')}>
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Library
                </Button>
                {children}
            </div>
        </div>
    );
}

export { BookLayout };
