import React from 'react';
import ChatBubble from '../../UI/ChatBubbles';
import Chatinput from './ChatInput';
import MockMessages from '../../../mock/messages.json';

export default function Chat() {
  const endOfMessagesRef = React.useRef(null);
  const [messages, setMessages] = React.useState([]);

  React.useEffect(() => {
    setMessages(MockMessages);
    endOfMessagesRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);
  return (
    <section className="w-full h-full justify-between flex flex-col p-4 space-y-2 overflow-y-auto overflow-x-hidden">
      {messages.map((msg) => (
        <ChatBubble key={msg.id} text={msg.text} sender={msg.sender} />
      ))}
      <div ref={endOfMessagesRef} />
      <Chatinput />
    </section>
  );
}
