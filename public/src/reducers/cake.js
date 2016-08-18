/**
 * Created by jae on 16-8-14.
 */
const cake=(state=[],action)=>{
  console.log(1);
  switch (action.type){
  case 'CAKE_LOADED':
    console.log(1);
    return action.data;
  }
  return state;
};
export default cake;