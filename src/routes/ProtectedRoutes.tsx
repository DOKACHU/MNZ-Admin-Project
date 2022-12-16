import React, { Suspense } from 'react';
import { Box, CircularProgress } from '@mui/material';
import { Navigate, Outlet } from 'react-router-dom';
import { Dashboard } from '../features/misc';
import { MainLayout } from '../layouts';

import { lazyImport } from '../utils/lazyImport';

const { CouponRoutes } = lazyImport(
  () => import('../features/coupons'),
  'CouponRoutes'
);

export default function App() {
  return (
    <MainLayout>
      <Suspense
        fallback={
          <Box
            sx={{
              minHeight: 'calc(100vh - 110px)',
              border: '1px solid red',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <CircularProgress />
          </Box>
        }
      >
        <Outlet />
      </Suspense>
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
      {
        path: 'pro',
        element: <div>pro</div>,
      },
      {
        path: 'coupon/*',
        element: <CouponRoutes />,
      },
      // TODO: /admin/asdfasdf 이렇게 아무렇게나 입려하면 /admin 으로 빠지기
      { path: '*', element: <Navigate to="." /> },
    ],
  },

  // TODO: 아무렇게나 입려하면 /admin 으로 빠지기
  // NotFound
  // { path: '*', element: <Navigate to="/admin" /> },
];
