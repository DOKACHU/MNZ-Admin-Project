import { Route, Routes, Navigate } from 'react-router-dom';
import Reviews from './Reviews';
import ReviewDetail from './ReviewDetail';

export function ReviewRoutes() {
  return (
    <Routes>
      <Route path="" element={<Reviews />} />
      <Route path=":id" element={<ReviewDetail />} />
      <Route path="*" element={<Navigate to="." />} />
    </Routes>
  );
}
