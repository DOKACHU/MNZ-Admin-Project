/* eslint-disable react/jsx-no-useless-fragment */
// TODO : useAuth
import React, { useState } from 'react';
import { useRoutes } from 'react-router-dom';

// protect, public
import { protectedRoutes } from './ProtectedRoutes';
import { publicRoutes } from './PublicRoutes';

export default function AppRoutes() {
  // TODO: useAuth
  const test = true;

  const commonRoutes = [{ path: '/auth', element: <div>Landing</div> }];

  // route
  const routes = !test ? protectedRoutes : publicRoutes;

  // element
  const element = useRoutes([...routes, ...commonRoutes]);

  return <>{element}</>;
}
