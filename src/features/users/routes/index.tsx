import { Route, Routes, Navigate } from 'react-router-dom';
import Users from './Users';
import UserDetail from './UserDetail';

export function UsersRoutes() {
  return (
    <Routes>
      <Route path="" element={<Users />} />
      <Route path=":id" element={<UserDetail />} />
      <Route path="*" element={<Navigate to="." />} />
    </Routes>
  );
}
