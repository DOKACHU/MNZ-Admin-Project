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
  Book,
  BookDetail,
  User,
  UserDetail,
  Point,
  PointDetail,
  Notice,
  NoticeDetail,
  Notification,
  NotificationDetail,
  Payment,
  PaymentDetail,
} from './pages';
import { OldMainLayout } from './layouts';

export function AppRoutes() {
  // TODO: 인증 절차 넣기
  return (
    <Routes>
      <Route path="/" element={<OldMainLayout />}>
        <Route path="login" />
        <Route path="book" element={<Book />} />
        <Route path="book/:id" element={<BookDetail />} />
        <Route path="center" element={<Center />} />
        <Route path="center/:id" element={<CenterDetail />} />
        <Route path="pro" element={<Pro />} />
        <Route path="pro/:id" element={<ProDetail />} />
        <Route path="user" element={<User />} />
        <Route path="user/:id" element={<UserDetail />} />
        <Route path="point" element={<Point />} />
        <Route path="point/:id" element={<PointDetail />} />
        <Route path="coupon" element={<Coupon />} />
        <Route path="coupon/:id" element={<CouponDetail />} />
        <Route path="product" element={<Product />} />
        <Route path="product/:id" element={<ProductDetail />} />
        <Route path="review" element={<Review />} />
        <Route path="review/:id" element={<ReviewDetail />} />
        <Route path="notice" element={<Notice />} />
        <Route path="notice/:id" element={<NoticeDetail />} />
        <Route path="notification" element={<Notification />} />
        <Route path="notification/:id" element={<NotificationDetail />} />
        <Route path="payment" element={<Payment />} />
        <Route path="payment/:id" element={<PaymentDetail />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export function App() {
  return (
    <>
      <CssBaseline />
      <AppRoutes />
    </>
  );
}
