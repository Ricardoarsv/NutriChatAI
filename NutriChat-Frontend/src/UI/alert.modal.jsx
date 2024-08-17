import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';

const AlertModal = ({ message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 2000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <motion.div
      className="w-60 h-40 rounded-xl bg-yellow-100  border-yellow-200 border-2 bg-opacity-50 flex text-center justify-center items-center"
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -100, transition: { duration: 2 } }}
    >
      <div className="flex flex-row gap-2 items-center">
        <FontAwesomeIcon icon={faExclamationCircle} className="alert-icon" />
        <p>{message}</p>
      </div>
    </motion.div>
  );
};

export default AlertModal;
