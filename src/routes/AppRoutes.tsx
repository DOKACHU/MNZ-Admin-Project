/* eslint-disable react/jsx-no-useless-fragment */
import { useRoutes, Navigate } from 'react-router-dom';

// protect, public
import { protectedRoutes } from './ProtectedRoutes';
import { publicRoutes } from './PublicRoutes';
import { useUser } from '../lib/auth';

export default function AppRoutes() {
  const user = useUser();
  console.log({ user });
  const commonRoutes = [{ path: '/*', element: <Navigate to="/auth/login" /> }];
  // route
  const routes = !user.data ? protectedRoutes : publicRoutes;

  // element
  const element = useRoutes([...routes, ...commonRoutes]);

  return <>{element}</>;
}
