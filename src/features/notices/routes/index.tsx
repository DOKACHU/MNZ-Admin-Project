import { Route, Routes, Navigate } from 'react-router-dom';
import Notices from './Notices';
import NoticeDetail from './NoticeDetail';

export function NoticesRoutes() {
  return (
    <Routes>
      <Route path="" element={<Notices />} />
      <Route path=":bookingId" element={<NoticeDetail />} />
      <Route path="*" element={<Navigate to="." />} />
    </Routes>
  );
}
