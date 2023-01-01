import React from 'react';
import { Drawer, Box, Grid, Typography, Divider } from '@mui/material';

type CustomDrawerProps = {
  title?: string;
  open: boolean;
  children: React.ReactNode;
  renderHeader?: React.ReactNode;
  onClose: () => void;
  onSubmit?: () => void;
};

export default function CustomDrawer({
  renderHeader,
  open,
  onClose,
  children,
  onSubmit,
  title,
}: CustomDrawerProps) {
  return (
    <Drawer
      ModalProps={{
        keepMounted: false,
      }}
      anchor="right"
      open={open}
      onClose={onClose}
    >
      <Box
        sx={{
          width: '500px',
          p: 2,
        }}
      >
        <form onSubmit={onSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Typography variant="h4">{title}</Typography>
            </Grid>
            <Grid item xs={6} justifyContent="flex-end">
              {renderHeader}
            </Grid>
            <Divider />
            {children}
            <Divider />
          </Grid>
        </form>
      </Box>
    </Drawer>
  );
}
