import React from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../utils/UserContext';
import { motion } from 'framer-motion';
import saveUser from '../utils/saveUser';
import getAPiUrl from '../utils/getApiUrl';

export default function Login() {
  const { setUserID } = React.useContext(UserContext);
  const apiUrl = getAPiUrl();

  const handleSignIn = () => {
    fetch(`${apiUrl}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: document.getElementById('username').value,
        password: document.getElementById('password').value,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (!data) {
          throw new Error('No data received from server');
        }
        if (data.error) {
          alert(data.error);
        } else {
          setUserID(data.user);
          saveUser(data.user);
          window.location.reload();
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-whitePrimary p-8 rounded-lg shadow-lg max-w-md w-full"
      >
        <h2 className="text-2xl font-bold mb-6 text-darkness text-center">
          Login
        </h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSignIn();
          }}
        >
          <div className="mb-4">
            <label
              className="block text-darkness text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-darkness leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Username"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-darkness text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-darkness mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="******************"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-primary hover:bg-secondary text-whitePrimary font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Sign In
            </button>
            <Link
              className="inline-block align-baseline font-bold text-sm text-primary hover:text-secondary"
              to="/Register"
            >
              Don't have an account yet?
            </Link>
          </div>
        </form>
      </motion.div>
    </div>
  );
}
