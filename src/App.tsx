import { Route, Routes } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import { Center, NotFound } from './pages';
import { MainLayout } from './layouts';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="center" element={<Center />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export function WrappedApp() {
  return (
    <>
      <CssBaseline />
      <App />
    </>
  );
}
