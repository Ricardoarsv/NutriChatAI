const saveUser = (userId) => {
  if (userId) {
    localStorage.setItem('userId', userId);
  } else {
    console.error('Invalid userId');
  }
};

export default saveUser;
