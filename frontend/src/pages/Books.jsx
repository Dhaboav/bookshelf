import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import EditSquareIcon from '@mui/icons-material/EditSquare';
import { Box, Button, IconButton, Typography } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Tabel from '../components/ui/Tabel';

const formatDateTime = (utcString) =>
    new Date(utcString).toLocaleString('id-ID', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
    });

export default function Books() {
    const [rows, setRows] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await axios.get('http://localhost:8000/books/');
                const formatted = response.data.map((book, index) => ({
                    id: book.id || index + 1,
                    title: book.title,
                    genre: book.genre,
                    author: book.author,
                    isbn: book.isbn,
                    created_at: formatDateTime(book.created_at),
                    last_updated: formatDateTime(book.last_updated),
                }));
                setRows(formatted);
            } catch (error) {
                console.error('Error fetching books:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchBooks();
    }, []);

    // Fungsi tombol tambah buku
    const handleAddBook = () => {
        console.log('Tambah buku baru diklik!');
        // arahkan ke halaman form tambah buku
    };

    // Fungsi Edit
    const handleEdit = (row) => {
        console.log('Edit:', row);
        // arahkan ke halaman edit atau modal
    };

    // Fungsi Delete
    const handleDelete = (row) => {
        if (window.confirm(`Hapus buku "${row.title}"?`)) {
            console.log('Delete:', row.id);
            // panggil API delete
        }
    };

    // Kolom tabel termasuk kolom aksi
    const columns = [
        { field: 'id', headerName: 'ID', width: 80, align: 'center', headerAlign: 'center' },
        {
            field: 'title',
            headerName: 'Judul',
            width: 200,
            align: 'center',
            headerAlign: 'center',
        },
        { field: 'genre', headerName: 'Genre', width: 150, align: 'center', headerAlign: 'center' },
        {
            field: 'author',
            headerName: 'Pengarang',
            width: 150,
            align: 'center',
            headerAlign: 'center',
        },
        { field: 'isbn', headerName: 'ISBN', width: 150, align: 'center', headerAlign: 'center' },
        {
            field: 'last_updated',
            headerName: 'Terakhir Diperbarui',
            width: 180,
            align: 'center',
            headerAlign: 'center',
        },
        {
            field: 'actions',
            headerName: 'Aksi',
            width: 150,
            align: 'center',
            headerAlign: 'center',
            sortable: false,
            filterable: false,
            renderCell: (params) => (
                <>
                    <IconButton color="primary" onClick={() => handleEdit(params.row)} size="small">
                        <EditSquareIcon />
                    </IconButton>
                    <IconButton color="error" onClick={() => handleDelete(params.row)} size="small">
                        <DeleteIcon />
                    </IconButton>
                </>
            ),
        },
    ];

    return (
        <>
            <Typography variant="h3" textAlign="center" gutterBottom sx={{ fontWeight: 'bold' }}>
                Data Buku
            </Typography>

            <Box
                sx={{
                    p: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2,
                    bgcolor: '#f5f5f5',
                    borderRadius: 2,
                }}
            >
                <Button
                    variant="contained"
                    startIcon={<AddIcon />}
                    onClick={handleAddBook}
                    sx={{ alignSelf: 'flex-start' }}
                >
                    Tambah Buku
                </Button>

                <Tabel columns={columns} rows={rows} loading={loading} />
            </Box>
        </>
    );
}
