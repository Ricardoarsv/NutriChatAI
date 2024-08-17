import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import logoutUser from '../utils/logoutuser';

export default function Header({ setChatState }) {
  const handleLogout = () => {
    try {
      logoutUser();
      window.location.reload();
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  return (
    <header className="flex justify-between items-center w-full h-16 px-8 bg-whitePrimary">
      <motion.div
        whileHover={{
          scale: 1.09,
          transition: { duration: 1 },
        }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setChatState(false)}
        className="flex items-center cursor-pointer"
      >
        <img
          className="w-10 h-10 rounded-full"
          src="https://gundo.app/favicon.ico"
          alt="AI"
        />
        <h1 className="ml-2 text-lg font-semibold text-secondary">GundoAI</h1>
      </motion.div>
      <div className="flex flex-row gap-2">
        <motion.button
          whileHover={{
            scale: 1.09,
            transition: { duration: 1 },
          }}
          whileTap={{ scale: 0.9 }}
          onClick={handleLogout}
          className="flex flex-row gap-2 items-center rounded-xl p-2 bg-primary"
        >
          <FontAwesomeIcon
            className="text-whitePrimary w-5 h-5"
            icon={faRightFromBracket}
          />
          <p className="text-whitePrimary">Logout</p>
        </motion.button>
      </div>
    </header>
  );
}
