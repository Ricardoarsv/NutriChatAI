import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClockRotateLeft, faXmark } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

export default function Header() {
  return (
    <header className="flex justify-between items-center w-full h-16 px-8 bg-whitePrimary">
      <div className="flex items-center">
        <img
          className="w-10 h-10 rounded-full"
          src="https://gundo.app/favicon.ico"
          alt="AI"
        />
        <h1 className="ml-2 text-lg font-semibold text-secondary">GundoAI</h1>
      </div>
      {/* <div className="flex flex-row gap-2">
        <motion.button
          whileHover={{
            scale: 1.09,
            transition: { duration: 1 },
          }}
          whileTap={{ scale: 0.9 }}
          className="flex flex-row gap-2 items-center rounded-xl p-2 bg-primary"
        >
          <FontAwesomeIcon
            className="text-whitePrimary w-5 h-5"
            icon={faXmark}
          />
          <p className="text-whitePrimary">New chat</p>
        </motion.button>
        <motion.button
          whileHover={{
            scale: 1.09,
            transition: { duration: 1 },
          }}
          whileTap={{ scale: 0.9 }}
          className="flex flex-row gap-2 items-center rounded-xl p-2 bg-primary"
        >
          <FontAwesomeIcon
            className="text-whitePrimary w-5 h-5"
            icon={faClockRotateLeft}
          />
          <p className="text-whitePrimary">History</p>
        </motion.button>
      </div> */}
    </header>
  );
}
