import { Route, Routes } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import { Center, CenterDetail, NotFound, Coupon, Product } from './pages';
import { MainLayout } from './layouts';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="center" element={<Center />} />
        <Route path="center/:id" element={<CenterDetail />} />

        <Route path="coupon" element={<Coupon />} />
        <Route path="product" element={<Product />} />
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
