import { Route, Routes } from 'react-router-dom';
import Bookings from './Bookings';
import BookingDetail from './BookingDetail';

export function BookingRoutes() {
  return (
    <Routes>
      <Route path="" element={<Bookings />} />
      <Route path="" element={<BookingDetail />} />
    </Routes>
  );
}
