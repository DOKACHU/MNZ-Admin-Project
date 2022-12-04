import React from 'react';
import { AppProvider } from './providers';
import { AppRoutes } from './routes';
// TODO:
// provider
// routes

export default function NewApp() {
  return (
    <AppProvider>
      <h1>asdf</h1>
      <AppRoutes />
    </AppProvider>
  );
}
