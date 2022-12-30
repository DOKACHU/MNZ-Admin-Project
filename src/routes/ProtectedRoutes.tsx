import React, { Suspense } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { Dashboard, NotFound } from '../features/misc';
import { MainLayout } from '../layouts';
import { Spinner } from '../components';
import { lazyImport } from '../utils/lazyImport';

const { CouponRoutes } = lazyImport(
  () => import('../features/coupons'),
  'CouponRoutes'
);

const { BookingRoutes } = lazyImport(
  () => import('../features/bookings'),
  'BookingRoutes'
);

const { CentersRoutes } = lazyImport(
  () => import('../features/centers'),
  'CentersRoutes'
);

const { ProsRoutes } = lazyImport(
  () => import('../features/pros'),
  'ProsRoutes'
);

const { UsersRoutes } = lazyImport(
  () => import('../features/users'),
  'UsersRoutes'
);

const { PaymentRoutes } = lazyImport(
  () => import('../features/payments'),
  'PaymentRoutes'
);

const { ReviewRoutes } = lazyImport(
  () => import('../features/reviews'),
  'ReviewRoutes'
);

const { PointRoutes } = lazyImport(
  () => import('../features/points'),
  'PointRoutes'
);

const { NoticesRoutes } = lazyImport(
  () => import('../features/notices'),
  'NoticesRoutes'
);

const { PushsRoutes } = lazyImport(
  () => import('../features/push'),
  'PushsRoutes'
);

export default function App() {
  return (
    <MainLayout>
      <Suspense fallback={<Spinner />}>
        <Outlet />
      </Suspense>
    </MainLayout>
  );
}

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
        path: 'bookings/*',
        element: <BookingRoutes />,
      },
      {
        path: 'coupons/*',
        element: <CouponRoutes />,
      },
      {
        path: 'centers/*',
        element: <CentersRoutes />,
      },
      {
        path: 'pros/*',
        element: <ProsRoutes />,
      },
      {
        path: 'users/*',
        element: <UsersRoutes />,
      },
      {
        path: 'payments/*',
        element: <PaymentRoutes />,
      },
      {
        path: 'reviews/*',
        element: <ReviewRoutes />,
      },
      {
        path: 'points/*',
        element: <PointRoutes />,
      },
      {
        path: 'notices/*',
        element: <NoticesRoutes />,
      },
      {
        path: 'notifications/*',
        element: <PushsRoutes />,
      },
      // TODO: /admin/asdfasdf 이렇게 아무렇게나 입려하면 /admin 으로 빠지기
      // { path: '*', element: <Navigate to="." /> },
    ],
  },

  // TODO: 아무렇게나 입려하면 /admin 으로 빠지기
  // NotFound
  // { path: '*', element: <Navigate to="/admin" /> },
  { path: '*', element: <NotFound /> },
];
