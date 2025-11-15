import MainLayout from '@/components/layout/MainLayout';
import { Toaster } from '@/components/ui/Toast';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import BookPage from '@/pages/BookPage';
import Dashboard from './pages/Dashboard';
import Docs from './pages/Docs';
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

                    <Route path="/book/add" element={<BookPage mode="add" />} />
                    <Route path="/book/edit/:id" element={<BookPage mode="edit" />} />
                    <Route path="/book/detail/:id" element={<BookPage mode="detail" />} />

                    <Route path="/docs" element={<Docs />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </QueryClientProvider>
);

export default App;
