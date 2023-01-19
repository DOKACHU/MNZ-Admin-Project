import React from 'react';
import { Box, Grid, Typography, Container, Card } from '@mui/material';

type AuthLayoutProps = {
  children: React.ReactNode;
  title?: string;
  onSubmit?: () => void;
};

export default function AuthLayout({
  title,
  children,
  onSubmit,
}: AuthLayoutProps) {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100vh',
        // background: 'red',
      }}
    >
      <Container maxWidth="sm">
        <Card
          sx={{
            // border: '1px solid red',
            borderRadius: 4,
            padding: 2,
            background: '#e3f2fd',
          }}
        >
          <form onSubmit={onSubmit}>
            <Grid container spacing={2}>
              <Grid item>
                <Typography variant="h4">{title}</Typography>
              </Grid>
              {children}
            </Grid>
          </form>
        </Card>
      </Container>
    </Box>
  );
}
