import React from 'react';
import Header from '../components/Header';
import WelcomeMessage from '../components/WelcomeMessage';
import Chat from '../components/Chat/Chat';

export default function ChatBot() {
  const [chatState, setChatState] = React.useState(true);

  return (
    <div className="flex flex-col justify-between rounded-lg shadow-xl border-brightness border-2 items-center w-full h-full bg-whitePrimary">
      <Header />
      {chatState ? <Chat /> : <WelcomeMessage setChatState={setChatState} />}
    </div>
  );
}
