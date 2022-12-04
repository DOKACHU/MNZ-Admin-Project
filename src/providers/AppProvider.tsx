import Reac, { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { HelmetProvider } from 'react-helmet-async';
import { QueryClientProvider } from 'react-query';
import { BrowserRouter as Router } from 'react-router-dom';
import { CircularProgress, Button, Box, CssBaseline } from '@mui/material';

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
      <Button> Refresh</Button>
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
          {/* <QueryClientProvider> */}
          {/* TODO: notification */}
          <Router>{children}</Router>
          {/* </QueryClientProvider> */}
        </HelmetProvider>
      </ErrorBoundary>
    </Suspense>
  );
}
