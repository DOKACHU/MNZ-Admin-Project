import Reac, { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { HelmetProvider } from 'react-helmet-async';
import { ReactQueryDevtools } from 'react-query/devtools';
import { QueryClientProvider } from 'react-query';
import { BrowserRouter as Router } from 'react-router-dom';
import {
  CircularProgress,
  Button,
  Box,
  CssBaseline,
  Typography,
} from '@mui/material';
import { AuthProvider } from '../lib/auth';
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
    <Box>
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
            {/* <AuthProvider> */}
            <Router>{children}</Router>
            {/* </AuthProvider> */}
          </QueryClientProvider>
        </HelmetProvider>
      </ErrorBoundary>
    </Suspense>
  );
}
