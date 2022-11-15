import { Route, Routes } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import {
  Center,
  CenterDetail,
  NotFound,
  Coupon,
  Product,
  ProductDetail,
  Pro,
  ProDetail,
  CouponDetail,
  Review,
  ReviewDetail,
} from './pages';
import { MainLayout } from './layouts';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="center" element={<Center />} />
        <Route path="center/:id" element={<CenterDetail />} />
        <Route path="pro" element={<Pro />} />
        <Route path="pro/:id" element={<ProDetail />} />
        <Route path="coupon" element={<Coupon />} />
        <Route path="coupon/:id" element={<CouponDetail />} />
        <Route path="product" element={<Product />} />
        <Route path="product/:id" element={<ProductDetail />} />
        <Route path="review" element={<Review />} />
        <Route path="review/:id" element={<ReviewDetail />} />
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
