import { Navigate, Route, Routes } from 'react-router-dom';
import Coupons from './Coupons';
import CouponDetail from './CouponDetail';

export function CouponRoutes() {
  return (
    <Routes>
      <Route path="" element={<Coupons />} />
      <Route path="" element={<CouponDetail />} />
    </Routes>
  );
}
