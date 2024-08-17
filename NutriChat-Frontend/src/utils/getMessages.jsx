function getMessages() {
  const messages = localStorage.getItem('messages');
  if (messages) {
    return JSON.parse(messages);
  } else {
    return [];
  }
}

export default getMessages;
