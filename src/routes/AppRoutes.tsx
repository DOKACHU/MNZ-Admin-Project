/* eslint-disable react/jsx-no-useless-fragment */
// TODO : useAuth
import React from 'react';
import { useRoutes } from 'react-router-dom';

// protect, public
import { protectedRoutes } from './ProtectedRoutes';

export default function AppRoutes() {
  // TODO: useAuth

  // route

  // element
  const element = useRoutes([...protectedRoutes]);

  return <>{element}</>;
}
