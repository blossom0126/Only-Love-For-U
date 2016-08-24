/**
 * Created by jae on 16-8-23.
 */
const username=(state={},action)=>{

  switch (action.type){
  case 'Loggin_state_received':
    console.log('reducer-name');
    return action.name;
  }
  return state;
};
export default username;
