import { Route, Routes, Navigate } from 'react-router-dom';
import Pushs from './Pushs';
import PushDetail from './PushDetail';

export function PushsRoutes() {
  return (
    <Routes>
      <Route path="" element={<Pushs />} />
      <Route path=":bookingId" element={<PushDetail />} />
      <Route path="*" element={<Navigate to="." />} />
    </Routes>
  );
}
