import React from 'react';
import ChatBubble from '../../UI/ChatBubbles';
import Chatinput from './ChatInput';
import AlertModal from '../../UI/alert.modal';
import getUser from '../../utils/getUser';
import MessageSkeleton from '../../UI/messages.skeleton';

export default function Chat({ apiUrl }) {
  const endOfMessagesRef = React.useRef(null);
  const [messages, setMessages] = React.useState([]);
  const [showSkeleton, setShowSkeleton] = React.useState(true);
  const [showAlert, setShowAlert] = React.useState(false);
  const [alertMessage, setAlertMessage] = React.useState('');
  const [userID, setUserID] = React.useState('');
  const [response, setResponse] = React.useState('');

  const onClose = () => {
    setShowAlert(false);
  };

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setShowSkeleton(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  React.useEffect(() => {
    const id = getUser();
    if (id) {
      setUserID(id);
    } else {
      console.error('No user ID found');
    }
  }, []);

  React.useEffect(() => {
    if (userID) {
      fetch(`${apiUrl}/messages/${userID}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (Array.isArray(data)) {
            // Crear un nuevo array para almacenar los mensajes reorganizados
            const reorderedData = new Array(data.length);

            // Recorrer el array y reorganizar los elementos
            for (let i = 0; i < data.length; i++) {
              if (i % 2 === 0) {
                // Si el índice es par, mover el elemento al índice impar correspondiente
                reorderedData[i + 1] = data[i];
              } else {
                // Si el índice es impar, mover el elemento al índice par correspondiente
                reorderedData[i - 1] = data[i];
              }
            }

            // Filtrar los elementos undefined en caso de que el array tenga longitud impar
            const filteredData = reorderedData.filter(
              (item) => item !== undefined
            );

            // Actualizar el estado con el array reorganizado
            setMessages(filteredData);
          } else {
            console.error('Invalid data format:', data);
          }
        })
        .catch((error) => {
          console.error('Error fetching messages:', error);
        });
    }
  }, [userID]);

  React.useEffect(() => {
    if (response) {
      setMessages((prevMessages) => [...prevMessages, response]);
    }
  }, [response]);

  React.useEffect(() => {
    endOfMessagesRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, showAlert]);

  return (
    <section className="w-full h-full flex flex-col p-4 space-y-2 overflow-y-auto overflow-x-hidden">
      {Array.isArray(messages) && messages.length > 0
        ? messages.map((msg, index) => (
            <ChatBubble key={index} text={msg.message} userID={msg.userID} />
          ))
        : showSkeleton &&
          Array.from({ length: 4 }).map((_, index) => (
            <MessageSkeleton key={index} />
          ))}
      {showAlert && <AlertModal message={alertMessage} onClose={onClose} />}
      {!showSkeleton && <div className="h-full" />}
      <div ref={endOfMessagesRef} />
      <Chatinput
        userID={userID}
        setResponse={setResponse}
        setMessages={setMessages}
        setShowAlert={setShowAlert}
        setAlertMessage={setAlertMessage}
        apiUrl={apiUrl}
      />
    </section>
  );
}
