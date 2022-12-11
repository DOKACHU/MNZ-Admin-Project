/* eslint-disable react/jsx-no-useless-fragment */
// TODO: Landing
// TODO : useAuth
import React from 'react';
import { useRoutes } from 'react-router-dom';

// protect, public
// import ProtectedRoutes from './ProtectedRoutes';

export default function AppRoutes() {
  // TODO: useAuth

  // route

  // element
  const element = useRoutes([]);

  return <>{element}</>;
}
