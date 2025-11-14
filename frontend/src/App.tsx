import MainLayout from '@/components/layout/MainLayout';
import { Toaster } from '@/components/ui/Toast';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddBook from './pages/AddBook';
import BookDetail from './pages/BookDetail';
import Dashboard from './pages/Dashboard';
import Docs from './pages/Docs';
import EditBook from './pages/EditBook';
import Landing from './pages/Landing';
import NotFound from './pages/NotFound';

const queryClient = new QueryClient();

const App = () => (
    <QueryClientProvider client={queryClient}>
        <BrowserRouter>
            <Toaster richColors position="bottom-right" />
            <Routes>
                <Route element={<MainLayout />}>
                    <Route path="/" element={<Landing />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/book/:id" element={<BookDetail />} />
                    <Route path="/books/add" element={<AddBook />} />
                    <Route path="/books/edit/:id" element={<EditBook />} />
                    <Route path="/docs" element={<Docs />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </QueryClientProvider>
);

export default App;
