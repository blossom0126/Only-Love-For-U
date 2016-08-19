const users = (state = [], action) => {
  switch (action.type) {
  case 'TODO_LOADED':
    return action.data;
  case 'LoginFailed':
    return action.data;
  }
  return state;
};

export default users;