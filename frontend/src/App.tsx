import { Toaster as Sonner } from '@/components/mess/sonner';
import { Toaster } from '@/components/mess/toaster';
import { TooltipProvider } from '@/components/mess/tooltip';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddBook from './pages/AddBook';
import BookDetail from './pages/BookDetail';
import Dashboard from './pages/Dashboard';
import Docs from './pages/Docs';
import EditBook from './pages/EditBook';
import Index from './pages/Index';
import NotFound from './pages/NotFound';

const queryClient = new QueryClient();

const App = () => (
    <QueryClientProvider client={queryClient}>
        <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/book/:id" element={<BookDetail />} />
                    <Route path="/books/add" element={<AddBook />} />
                    <Route path="/books/edit/:id" element={<EditBook />} />
                    <Route path="/docs" element={<Docs />} />
                    {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </TooltipProvider>
    </QueryClientProvider>
);

export default App;
