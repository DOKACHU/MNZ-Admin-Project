import { Route, Routes, Navigate } from 'react-router-dom';
import Centers from './Centers';
import CenterDetail from './CenterDetail';

export function CentersRoutes() {
  return (
    <Routes>
      <Route path="" element={<Centers />} />
      <Route path=":id" element={<CenterDetail />} />
      <Route path="*" element={<Navigate to="." />} />
    </Routes>
  );
}
