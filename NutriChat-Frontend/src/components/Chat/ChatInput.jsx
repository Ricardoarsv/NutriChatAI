import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function ChatInput({
  userID,
  setResponse,
  setMessages,
  setShowAlert,
  setAlertMessage,
}) {
  const [chatMessage, setChatMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const sendMessage = async (url, body) => {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    return response.json();
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const newMessage = { message: chatMessage, userID };

      // Obtener la respuesta del chatbot
      const chatbotResponse = await sendMessage(
        'http://localhost:8080/api/nutriGPT/getAnswer/send_question',
        {
          userID,
          question: newMessage.message,
        }
      );

      if (chatbotResponse.error || !chatbotResponse.answer) {
        console.log(chatbotResponse);
        setAlertMessage(
          chatbotResponse.error || 'Error al obtener la respuesta.'
        );
        setShowAlert(true);
        return;
      }

      // Enviar el mensaje al servidor si la respuesta del chatbot es correcta
      const messageResponse = await sendMessage(
        'http://localhost:8080/api/messages/create',
        {
          userID,
          messages: [{ userID, message: newMessage.message }],
        }
      );

      if (messageResponse.error) {
        setAlertMessage(messageResponse.error);
        setShowAlert(true);
        return;
      }

      const responseMessage = {
        message: chatbotResponse.answer,
        userID: 'NutriGPT',
      };
      setMessages((prevMessages) => [
        ...prevMessages,
        newMessage,
        responseMessage,
      ]);
      setChatMessage('');
    } catch (error) {
      setAlertMessage('Hubo un error al procesar tu solicitud.');
      setShowAlert(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.section
      animate={{ translateX: [0, 10, -10, 0] }}
      className="bg-white w-full pt-8 p-4 flex flex-row items-center justify-center gap-2"
    >
      <input
        type="text"
        id="chatInput"
        disabled={loading}
        value={chatMessage}
        onChange={(e) => setChatMessage(e.target.value)}
        className="w-full p-2 border-2 border-brightness rounded-lg"
        placeholder="Escribe un mensaje"
      />
      <motion.button
        whileHover={{ scale: 1.2, transition: { duration: 1 } }}
        whileTap={{ scale: 0.9 }}
        disabled={loading}
        onClick={handleSendMessage}
        className="bg-primary text-white p-2 mt-0 rounded-lg"
      >
        Enviar
      </motion.button>
    </motion.section>
  );
}
