import React from 'react';
import { motion } from 'framer-motion';
import postMessages from '../../utils/postMessages';
import validateMessage from '../../utils/validateMessage';

export default function Chatinput({
  messages,
  setMessages,
  setShowAlert,
  setAlertMessage,
}) {
  const [chatMessage, setChatMessage] = React.useState('');

  const handleSendMessage = (e) => {
    e.preventDefault();
    let status = validateMessage(chatMessage);
    if (!status[0]) {
      setChatMessage('');
      setAlertMessage(status[1]);
      setShowAlert(true);
      return;
    } else {
      const newMessage = {
        id: messages.length + 1,
        text: chatMessage,
        sender: 'user1',
      };
      setMessages((prevMessages) => [...prevMessages, newMessage]);
      setChatMessage('');
      postMessages(newMessage);
    }
  };

  return (
    <motion.section
      animate={{ translateX: [0, 10, -10, 0] }}
      className="sticky w-full pt-8 p-4 flex flex-row items-center justify-center gap-2"
    >
      <input
        type="text"
        id="chatInput"
        value={chatMessage}
        onChange={(e) => setChatMessage(e.target.value)}
        className="w-full p-2 border-2 border-brightness rounded-lg"
        placeholder="Escribe un mensaje"
      />
      <motion.button
        whileHover={{
          scale: 1.2,
          transition: { duration: 1 },
        }}
        whileTap={{ scale: 0.9 }}
        onClick={handleSendMessage}
        className="bg-primary text-white p-2 mt-0 rounded-lg"
      >
        Enviar
      </motion.button>
    </motion.section>
  );
}
