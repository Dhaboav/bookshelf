import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

export default function Tabel({ columns, rows, loading = false, height = 370 }) {
    return (
        <Box sx={{ height, width: '100%' }}>
            <DataGrid
                columns={columns}
                rows={rows}
                loading={loading}
                initialState={{
                    pagination: { paginationModel: { pageSize: 5 } },
                }}
                pageSizeOptions={[5, 10, 25, 50, 100]}
                disableRowSelectionOnClick
            />
        </Box>
    );
}
