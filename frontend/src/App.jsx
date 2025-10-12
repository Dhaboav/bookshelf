import { Route, Routes } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import Books from './pages/Books';

export default function App() {
    return (
        <MainLayout>
            <Routes>
                <Route path="/books" element={<Books />} />
            </Routes>
        </MainLayout>
    );
}
