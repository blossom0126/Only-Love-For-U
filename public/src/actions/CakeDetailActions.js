/**
 * Created by hanyile on 16/8/21.
 */

export const LoadCakeDetail = (data)=> {
  return {
    type: 'CAKEDETAIL_LOADED',
    data
  };
};

export const InitializeCakeDetail = (id)=> {
  return {
    type: 'CAKEDETAIl_INITIALIZED',
    id
  };
};
