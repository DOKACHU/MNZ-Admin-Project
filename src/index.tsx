import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import NewApp from './NewApp';

// in mocking

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <NewApp />
  </React.StrictMode>
);
