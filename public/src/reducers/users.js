const users = (state = [], action)=> {
  switch (action.type) {
  case 'TODO_LOADED':
    return action.data;

  default: return state;
  }
};

export default users;