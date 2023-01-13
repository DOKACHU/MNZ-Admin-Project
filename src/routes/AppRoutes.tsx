/* eslint-disable react/jsx-no-useless-fragment */
import React, { useState } from 'react';
import { useRoutes, Navigate } from 'react-router-dom';

// protect, public
import { protectedRoutes } from './ProtectedRoutes';
import { publicRoutes } from './PublicRoutes';
// import { useAuth } from '../lib/auth';

export default function AppRoutes() {
  // TODO: useAuth
  // const auth = useAuth();
  // console.log({ auth });

  const test = false;

  const commonRoutes = [{ path: '/*', element: <Navigate to="/auth/login" /> }];

  // route
  const routes = !test ? protectedRoutes : publicRoutes;

  // element
  const element = useRoutes([...routes, ...commonRoutes]);

  return <>{element}</>;
}
