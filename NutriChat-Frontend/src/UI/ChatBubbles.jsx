import React from 'react';
import { motion } from 'framer-motion';

const ChatBubble = ({ text, userID }) => {
  const isUser1 = userID != 'NutriGPT';
  return (
    <motion.div
      className={`p-4 m-2 rounded-lg max-w-xs ${
        isUser1
          ? 'bg-blue-500 text-white self-end'
          : 'bg-gray-300 text-black self-start'
      }`}
      initial={{ opacity: 0, x: isUser1 ? 50 : -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      {text}
    </motion.div>
  );
};

export default ChatBubble;
