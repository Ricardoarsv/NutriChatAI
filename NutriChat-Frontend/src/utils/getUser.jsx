const getUser = () => {
  const userId = localStorage.getItem('userId');
  if (userId) {
    return userId;
  } else {
    console.error('No userId found in localStorage');
    return null;
  }
};

export default getUser;
