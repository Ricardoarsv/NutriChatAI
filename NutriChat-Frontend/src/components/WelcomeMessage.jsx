import React from 'react';
import { motion } from 'framer-motion';

export default function WelcomeMessage({ setChatState }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col p-4 items-center w-full h-full py-10"
    >
      <motion.h1
        animate={{
          scale: [1, 1, 1, 1, 1],
          rotate: [0, 8, -8, 8, 0],
          borderRadius: ['10%', '10%', '10%', '10%', '10%'],
        }}
        transition={{ duration: 1 }}
        className="text-3xl font-semibold rounded-2xl bg-brightness p-2"
      >
        GundoAI
      </motion.h1>
      <p className="text-lg text-center mt-4">
        Chat with our bot to get the best nutrition advice
      </p>
      <div className="flex flex-col items-center pt-12 md:pt-8">
        <img
          className="w-28 h-28 rounded-full shadow-lg border-2 border-brightness"
          src="https://scontent.fcuc1-1.fna.fbcdn.net/v/t39.30808-6/270240430_105705608655502_5992408689036467330_n.png?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeF8qEun_Xcz-5cfHsfYBewjNlSC_4PujEY2VIL_g-6MRjBJI7MZfoHspaI4sKXu6nUiFAe8rZVZIPtJLyIf8HsW&_nc_ohc=J6nEcz6UYrIQ7kNvgF7p4ya&_nc_zt=23&_nc_ht=scontent.fcuc1-1.fna&oh=00_AYAx6fSQ9cpgrvRunej1RkirVG_ZSxs1oNv5p0sC81ogXg&oe=66C5DD28"
          alt="ChatBot"
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
          className="px-4 py-2 mt-4 text-white bg-primary rounded-lg"
        >
          Start Chat
        </motion.button>
      </div>
    </motion.div>
  );
}
