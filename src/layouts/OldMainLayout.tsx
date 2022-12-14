import React from 'react';
import { Outlet, Link as RouterLink } from 'react-router-dom';
import { Box, AppBar, Toolbar, Typography, Link } from '@mui/material';

import styled from 'styled-components';

import SideBar from './SideBar';

const Main = styled.main`
  margin-top: 88px;
  min-height: calc(100vh - 88px);
  width: 100%;
  background-color: #e3f2fd;
  border-radius: 8px;
`;

export default function OldMainLayout() {
  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar enableColorOnDark position="fixed" color="inherit" elevation={0}>
        <Toolbar
          sx={{
            height: '48px',
          }}
        >
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              background: '#fff',
            }}
          >
            <Box component="span">
              <Link
                component={RouterLink}
                to="/"
                sx={{
                  color: '##e3f2fd',
                  textDecoration: 'none',
                }}
              >
                <Typography variant="h4">MNZ</Typography>
              </Link>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <SideBar />
      <Main>
        <Outlet />
      </Main>
    </Box>
  );
}
