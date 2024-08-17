import React from 'react';
import ChatBubble from '../../UI/ChatBubbles';
import Chatinput from './ChatInput';
import getMessages from '../../utils/getMessages';
import AlertModal from '../../UI/alert.modal';

export default function Chat() {
  const endOfMessagesRef = React.useRef(null);
  const [messages, setMessages] = React.useState([]);
  const [showAlert, setShowAlert] = React.useState(false);
  const [alertMessage, setAlertMessage] = React.useState('');

  const onClose = () => {
    setShowAlert(false);
  };

  React.useEffect(() => {
    const LocalMessages = getMessages();
    if (LocalMessages.length > 0) {
      setMessages(LocalMessages);
      return;
    }
  }, []);

  React.useEffect(() => {
    endOfMessagesRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, showAlert]);

  return (
    <section className="w-full h-full justify-end flex flex-col p-4 space-y-2 overflow-y-auto overflow-x-hidden">
      {messages.map((msg) => (
        <ChatBubble key={msg.id} text={msg.text} sender={msg.sender} />
      ))}
      {showAlert && <AlertModal message={alertMessage} onClose={onClose} />}
      <div ref={endOfMessagesRef} />
      <Chatinput
        messages={messages}
        setMessages={setMessages}
        setShowAlert={setShowAlert}
        setAlertMessage={setAlertMessage}
      />
    </section>
  );
}
