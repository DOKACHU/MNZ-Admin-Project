import { Route, Routes, Navigate } from 'react-router-dom';
import Payments from './Payments';
import PaymentDetail from './PaymentDetail';

export function PaymentRoutes() {
  return (
    <Routes>
      <Route path="" element={<Payments />} />
      <Route path=":bookingId" element={<PaymentDetail />} />
      <Route path="*" element={<Navigate to="." />} />
    </Routes>
  );
}
