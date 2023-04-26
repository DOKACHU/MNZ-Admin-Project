import { Navigate, Route, Routes } from 'react-router-dom';
import EntryList from './EntryList';
import EntryDetail from './EntryDetail';

export function EntryFormRoutes() {
  return (
    <Routes>
      <Route path="" element={<EntryList />} />
      <Route path=":id" element={<EntryDetail />} />
    </Routes>
  );
}
