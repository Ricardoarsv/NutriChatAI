import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import History from './pages/History.jsx';
import './index.css';

const Approuter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/History',
    element: <History />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={Approuter} />
  </StrictMode>
);
