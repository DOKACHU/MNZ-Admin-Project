import { Route, Routes, Navigate } from 'react-router-dom';
import CenterFormList from './CenterFormList';
import CenterFormDetail from './CenterFormDetail';

export function CenterEntryFormRoutes() {
  return (
    <Routes>
      <Route path="" element={<CenterFormList />} />
      <Route path=":id" element={<CenterFormDetail />} />
      <Route path="*" element={<Navigate to="." />} />
    </Routes>
  );
}
