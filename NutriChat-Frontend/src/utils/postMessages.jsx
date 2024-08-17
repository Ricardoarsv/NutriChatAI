const postMessages = (newMessage) => {
  // Obtén los mensajes existentes del localStorage
  const existingMessages = JSON.parse(localStorage.getItem('messages')) || [];

  // Agrega un nuevo mensaje al array de mensajes existentes
  existingMessages.push(newMessage);

  // Guarda los mensajes actualizados en el localStorage
  localStorage.setItem('messages', JSON.stringify(existingMessages));
};

export default postMessages;
