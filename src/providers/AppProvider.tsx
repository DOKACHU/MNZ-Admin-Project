import React, { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { HelmetProvider } from 'react-helmet-async';
import { QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter as Router } from 'react-router-dom';
import {
  CircularProgress,
  Button,
  Box,
  CssBaseline,
  Typography,
} from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { AuthLoader } from '../lib/auth';
import { queryClient } from '../lib/react-query';

const style = {
  height: '100%',
  padding: 3,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

interface AppProviderProps {
  children: React.ReactNode;
}

function ErrorFallback() {
  //   console.log('ERROR');
  return (
    <Box sx={style}>
      <Typography variant="h5"> 뭔가 문제 발생 </Typography>
      <Button onClick={() => window.location.assign(window.location.origin)}>
        Refresh
      </Button>
    </Box>
  );
}

export default function AppProvider({ children }: AppProviderProps) {
  return (
    <Suspense
      fallback={
        <Box sx={style}>
          <CircularProgress />
        </Box>
      }
    >
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <CssBaseline />
        <HelmetProvider>
          <QueryClientProvider client={queryClient}>
            {import.meta.env.MODE === 'development' && <ReactQueryDevtools />}

            {/* TODO: notification */}
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <AuthLoader
                renderLoading={() => (
                  <Box sx={style}>
                    {/* <CircularProgress /> */}
                    <span>로딩중..</span>
                  </Box>
                )}
              >
                <Router>{children}</Router>
              </AuthLoader>
            </LocalizationProvider>
          </QueryClientProvider>
        </HelmetProvider>
      </ErrorBoundary>
    </Suspense>
  );
}
