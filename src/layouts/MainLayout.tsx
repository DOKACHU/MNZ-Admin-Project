import React from 'react';
import { Outlet } from 'react-router-dom';
import { Box, AppBar, Toolbar, CssBaseline } from '@mui/material';

export default function MainLayout() {
  return (
    <Box>
      <h1>asdf</h1>
      <Outlet />
    </Box>
  );
}
