import { Button } from '@/components/ui/Button';
import { Home, Search } from 'lucide-react';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function NotFound() {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        console.error('404 Error: User attempted to access non-existent route:', location.pathname);
    }, [location.pathname]);

    return (
        <div className="bg-secondary/20 flex min-h-screen flex-col items-center justify-center">
            <div className="mb-4 text-center">
                <h1 className="text-primary/20 text-[16rem] leading-none font-bold">404</h1>
                <h2 className="mb-1 text-3xl font-bold">Page Not Found</h2>
                <p className="text-secondary mx-auto max-w-md text-lg">
                    It seems the page you're looking for has been lost among endless shelves of
                    books.
                </p>
            </div>

            <div className="flex gap-4">
                <Button size="lg" onClick={() => navigate('/')} className="gap-2">
                    <Home className="h-5 w-5" />
                    Home
                </Button>
                <Button
                    size="lg"
                    variant="outline"
                    onClick={() => navigate('/dashboard')}
                    className="gap-2"
                >
                    <Search className="h-5 w-5" />
                    Explore the Library
                </Button>
            </div>

            <div className="mt-12 flex justify-center gap-2">
                <div className="bg-primary h-2 w-2 animate-bounce rounded-full" />
                <div className="bg-primary h-2 w-2 animate-bounce rounded-full delay-100" />
                <div className="bg-primary h-2 w-2 animate-bounce rounded-full delay-200" />
            </div>
        </div>
    );
}

export default NotFound;
