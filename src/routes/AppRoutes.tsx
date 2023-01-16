/* eslint-disable react/jsx-no-useless-fragment */
// TODO : useAuth
import React, { useState } from 'react';
import { useRoutes, Navigate, Outlet } from 'react-router-dom';

// protect, public
import { protectedRoutes } from './ProtectedRoutes';
import { publicRoutes } from './PublicRoutes';

export default function AppRoutes() {
  // TODO: useAuth

  const test = false;

  const commonRoutes = [{ path: '/', element: <Navigate to="/auth/login" /> }];

  // route
  const routes = !test ? protectedRoutes : publicRoutes;

  // element
  const element = useRoutes([...routes, ...commonRoutes]);

  return <>{element}</>;
}
