import { Button } from '@/components/ui/button';
import { BookOpen, FileText, Home, LayoutDashboard } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
    const location = useLocation();
    const isActive = (path: string) => location.pathname === path;

    return (
        <nav className="border-border fixed top-0 right-0 left-0 z-50 border-b bg-gray-50/80 backdrop-blur-lg">
            <div className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    <Link to="/" className="group flex items-center gap-2">
                        <div className="rounded-lg bg-linear-(--gradient-primary) p-2">
                            <BookOpen className="h-6 w-6 text-white" />
                        </div>
                        <span className="bg-linear-(--gradient-primary) bg-clip-text text-xl font-bold text-transparent">
                            MyLibrary
                        </span>
                    </Link>

                    <div className="flex items-center gap-2">
                        <Button asChild variant={isActive('/') ? 'default' : 'hover'} size="sm">
                            <Link to="/">
                                <Home className="mr-2 h-4 w-4" />
                                Home
                            </Link>
                        </Button>
                        <Button
                            asChild
                            variant={isActive('/dashboard') ? 'default' : 'hover'}
                            size="sm"
                        >
                            <Link to="/dashboard">
                                <LayoutDashboard className="mr-2 h-4 w-4" />
                                Dashboard
                            </Link>
                        </Button>
                        <Button asChild variant={isActive('/docs') ? 'default' : 'hover'} size="sm">
                            <Link to="/docs">
                                <FileText className="mr-2 h-4 w-4" />
                                Docs
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;
