import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import { styled } from '@mui/material/styles';
import * as React from 'react';

import AppBarHeader from './AppBar';
import SideDrawer from './SideDrawer';

const DrawerHeader = styled('div')(({ theme }) => ({
    ...theme.mixins.toolbar,
}));

export default function MainLayout({ children }) {
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => setOpen(true);
    const handleDrawerClose = () => setOpen(false);

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '100vh',
            }}
        >
            <CssBaseline />
            <AppBarHeader open={open} handleDrawerOpen={handleDrawerOpen} />
            <SideDrawer open={open} handleDrawerClose={handleDrawerClose} />
            <Box
                component="main"
                sx={{
                    p: 3,
                    width: '80%',
                }}
            >
                {children}
            </Box>
        </Box>
    );
}
