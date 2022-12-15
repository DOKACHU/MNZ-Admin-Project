import React from 'react';
import { Box, AppBar, Toolbar, Typography, Link } from '@mui/material';
import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';
import SideBar from './SideBar';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainBlock = {
  display: 'flex',
  height: '100vh',
};

const Main = styled.main`
  margin-top: 88px;
  min-height: calc(100vh - 88px);
  width: 100%;
  background-color: #e3f2fd;
  border-radius: 8px;
  padding: 10px;
`;

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <Box sx={MainBlock}>
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
                to="/admin"
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
      <Main>{children}</Main>
    </Box>
  );
}
