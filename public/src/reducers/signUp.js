/**
 * Created by wanggenwang on 16-8-22.
 */
const usersignup = (state = '', action)=> {
  switch (action.type) {
  case 'SIGNUP_FAIR':

    return action.data;

  case 'SIGNUP_SUCCESS':

    return action.data;
 /* case 'SIGNUP':

    return action.data;
  */}
  return state;
};

export default usersignup;