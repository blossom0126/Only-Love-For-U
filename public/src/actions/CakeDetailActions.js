/**
 * Created by hanyile on 16/8/21.
 */

export const GetCakeID = (id) => {
  return {
    type: ID_GETTER,
    id
  };
};

export const LoadCakeDetail = (data)=> {
  return {
    type: CAKEDETAIL_LOADED,
    data
  };
};

export const CAKEDETAIL_LOADED = 'CAKEDETAIL_LOADED';
export const ID_GETTER = 'ID_GETTER';
export const INIT_CAKEDETAIL = 'INIT_CAKEDETAIL';