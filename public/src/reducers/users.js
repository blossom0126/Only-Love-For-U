const users = (state ='', action)=> {
  switch (action.type) {
  case 'LOGIN_FAIR':
    return action.data;
  case 'LOGIN_SUCCESS':
    return action.data;
  }
  return state;
};

export default users;
/*
const users = (state ={name: ''}, action)=> {
  switch (action.type) {
    case 'TODO_LOADED':

      return {
        name: action.name
      };
  }
  return state;
};

export default users;*/
