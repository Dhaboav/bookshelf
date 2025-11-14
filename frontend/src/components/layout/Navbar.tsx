import { Button } from '@/components/ui/button';
import { BookOpen, FileText, Home, LayoutDashboard } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
    const { pathname } = useLocation();
    const isActive = (path: string) => pathname === path;

    return (
        <nav className="fixed top-0 right-0 left-0 z-50 border-b border-black bg-gray-50/80 backdrop-blur-lg">
            <div className="container mx-auto flex items-center justify-between p-4">
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
        </nav>
    );
}

export default Navbar;
