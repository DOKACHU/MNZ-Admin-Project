import { Route, Routes, Navigate } from 'react-router-dom';

import Login from './Login';
import Register from './Register';

export function AuthRoutes() {
  return (
    <Routes>
      <Route path="register" element={<Register />} />
      <Route path="login" element={<Login />} />
    </Routes>
  );
}
