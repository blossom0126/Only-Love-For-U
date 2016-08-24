/**
 * Created by jae on 16-8-23.
 */
export const validLogin = ()=> ({
  type: 'VALID_LOGIN'
});
export const login_state_received = (name,states)=> ({
  type: 'Loggin_state_received',
  name,
  states
});
