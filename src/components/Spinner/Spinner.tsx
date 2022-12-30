import React from 'react';
import { Box, CircularProgress } from '@mui/material';

export default function Spinner() {
  return (
    <Box
      sx={{
        minHeight: 'calc(100vh - 110px)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <CircularProgress />
    </Box>
  );
}
