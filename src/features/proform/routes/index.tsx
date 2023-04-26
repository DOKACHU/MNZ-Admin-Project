import { Route, Routes, Navigate } from 'react-router-dom';
import ProFormList from './ProFormList';
import ProFormDetail from './ProFormDetail';

export function ProEntryFormRoutes() {
  return (
    <Routes>
      <Route path="" element={<ProFormList />} />
      <Route path=":id" element={<ProFormDetail />} />
      <Route path="*" element={<Navigate to="." />} />
    </Routes>
  );
}
