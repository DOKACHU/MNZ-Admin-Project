import { Route, Routes, Navigate } from 'react-router-dom';
import Bookings from './Bookings';
import BookingDetail from './BookingDetail';

export function BookingRoutes() {
  return (
    <Routes>
      <Route path="" element={<Bookings />} />
      <Route path=":id" element={<BookingDetail />} />
      <Route path="*" element={<Navigate to="." />} />
    </Routes>
  );
}
