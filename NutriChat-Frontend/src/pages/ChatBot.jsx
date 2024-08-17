import React from 'react';
import Header from '../components/Header';
import WelcomeMessage from '../components/WelcomeMessage';
import Chat from '../components/Chat/Chat';
import getAPiUrl from '../utils/getApiUrl';

export default function ChatBot() {
  const [chatState, setChatState] = React.useState(false);
  const apiUrl = getAPiUrl();

  return (
    <div className="flex flex-col justify-between rounded-lg shadow-xl border-brightness border-2 items-center w-full h-full bg-whitePrimary">
      <Header setChatState={setChatState} />
      {chatState ? (
        <Chat apiUrl={apiUrl} />
      ) : (
        <WelcomeMessage setChatState={setChatState} />
      )}
    </div>
  );
}
