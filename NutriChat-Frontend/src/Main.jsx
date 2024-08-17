import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from 'react-router-dom';
import { UserProvider } from './utils/UserContext.jsx';
import getUser from './utils/getUser.jsx';
import App from './App.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import './index.css';

const userId = getUser();

const Approuter = createBrowserRouter([
  {
    path: '/Chat',
    element: userId ? <App /> : <Navigate to="/" />,
  },
  {
    path: '/',
    element: userId ? <Navigate to="/Chat" /> : <Login />,
  },
  {
    path: 'Register',
    element: userId ? <Navigate to="/Chat" /> : <Register />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserProvider value={userId}>
      <RouterProvider router={Approuter} />
    </UserProvider>
  </StrictMode>
);
