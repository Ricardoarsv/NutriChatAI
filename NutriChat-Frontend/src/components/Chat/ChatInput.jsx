import React from 'react';
import { motion } from 'framer-motion';

export default function Chatinput() {
  return (
    <section className="sticky w-full h-full pt-8 p-4 flex flex-row items-center justify-center gap-2">
      <input
        type="text"
        className="w-full p-2 border-2 border-brightness rounded-lg"
        placeholder="Escribe un mensaje"
      />
      <motion.button
        whileHover={{
          scale: 1.2,
          transition: { duration: 1 },
        }}
        whileTap={{ scale: 0.9 }}
        onClick={() => {
          setChatState(true);
        }}
        className="bg-primary text-white p-2 mt-0 rounded-lg"
      >
        Enviar
      </motion.button>
    </section>
  );
}
