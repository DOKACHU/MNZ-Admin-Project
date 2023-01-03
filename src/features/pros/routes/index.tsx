import { Route, Routes, Navigate } from 'react-router-dom';
import Pros from './Pros';
import ProDetail from './ProDetail';

export function ProsRoutes() {
  return (
    <Routes>
      <Route path="" element={<Pros />} />
      <Route path=":id" element={<ProDetail />} />
      <Route path="*" element={<Navigate to="." />} />
    </Routes>
  );
}
