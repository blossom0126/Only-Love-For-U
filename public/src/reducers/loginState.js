/**
 * Created by jae on 16-8-23.
 */
const loginstate=(state='Checking',action)=>{
  switch (action.type){
  case'Loggin_state_received':
    console.log('reducer-state');
    return action.states;
  }
  return state;
};
export default loginstate;