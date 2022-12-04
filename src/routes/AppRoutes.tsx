/* eslint-disable react/jsx-no-useless-fragment */
import React from 'react';
import { useRoutes } from 'react-router-dom';

export default function AppRoutes() {
  // TODO: useAuth
  const element = useRoutes([]);

  return <>{element}</>;
}
