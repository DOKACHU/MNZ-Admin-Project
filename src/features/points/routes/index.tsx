import { Route, Routes, Navigate } from 'react-router-dom';
import Points from './Points';
import PointDetail from './PointDetail';

export function PointRoutes() {
  return (
    <Routes>
      <Route path="" element={<Points />} />
      <Route path=":id" element={<PointDetail />} />
      <Route path="*" element={<Navigate to="." />} />
    </Routes>
  );
}
