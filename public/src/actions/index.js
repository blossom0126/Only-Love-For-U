export const addTodo = (text)=> ({
  type: 'ADD_TODO',
  text
});

export const loadCakeDetail = (data)=> {
  return {
    type: CAKEDETAIL_LOADED,
    data
  };
};


export const CAKEDETAIL_LOADED = 'CAKEDETAIL_LOADED';
export const MENUS_LOADED = 'ADD_TODO';
export const ID_GETTER = 'ID_GETTER';