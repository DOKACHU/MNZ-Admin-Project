import React from 'react';
import { Box } from '@mui/material';
import { Navigate, Outlet } from 'react-router-dom';
import { Dashboard } from '../feature/misc';
import { MainLayout } from '../layouts';

export default function App() {
  // TODO: mainLayout
  return (
    <MainLayout>
      ProtectedRoutes
      <Outlet />
    </MainLayout>
  );
}

// TODO: routes array

export const protectedRoutes = [
  {
    path: '/admin',
    element: <App />,
    children: [
      {
        path: '',
        element: <Dashboard />,
      },
      // TODO: /admin/asdfasdf 이렇게 아무렇게나 입려하면 /admin 으로 빠지기

      { path: '*', element: <Navigate to="." /> },
    ],
  },

  // TODO: 아무렇게나 입려하면 /admin 으로 빠지기
  // NotFound
  // { path: '*', element: <Navigate to="/admin" /> },
];
