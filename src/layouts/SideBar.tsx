import React from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Box,
  Drawer,
  ListItem,
  ListItemText,
  Stack,
  Chip,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { mainNavbarItems } from '../constansts/menu';

export default function SideBar() {
  const navigate = useNavigate();

  return (
    <Box
      component="nav"
      sx={{
        flexShrink: { md: 0 },
        width: '260px',
        marginTop: '60px',
      }}
    >
      <Drawer
        anchor="left"
        open
        variant="persistent"
        sx={{
          '& .MuiDrawer-paper': {
            width: '260px',
            background: '#fff',
            color: '#000',
            borderRight: 'none',
            top: '88px',
          },
        }}
        ModalProps={{ keepMounted: true }}
        color="inherit"
      >
        <PerfectScrollbar
          style={{
            height: 'calc(100vh - 88px)',
            paddingLeft: '16px',
            paddingRight: '16px',
          }}
        >
          <h1>SideBar</h1>
          {mainNavbarItems.map((item) => (
            <ListItem button key={item.id} onClick={() => navigate(item.route)}>
              <ListItemText
                sx={{
                  fontWeight: '600',
                  fontSize: '16px',
                }}
                primary={item.label}
              />
            </ListItem>
          ))}

          <Stack direction="row" justifyContent="center" sx={{ mb: 2 }}>
            <Chip
              label="v1.0.0"
              disabled
              size="small"
              sx={{ cursor: 'pointer' }}
            />
          </Stack>
        </PerfectScrollbar>
      </Drawer>
    </Box>
  );
}
