// export const CAKEDETAIL_LOADED = 'CAKEDETAIL_LOADED';
// export const ID_GETTER = 'ID_GETTER';

/**
 * Created by hanyile on 16/8/21.
 */

export const LoadCakeDetail = (data)=> {
  console.log('actions/cakeDetailActions/CAKEDETAIL_LOADED:data:' + data);
  return {
    type: 'CAKEDETAIL_LOADED',
    data
  };
};

export const InitializeCakeDetail = (id)=> {
  console.log('actions/cakeDetailActions/CAKEDETAIl_INITIALIZED:id:' + id);
  return {
    type: 'CAKEDETAIl_INITIALIZED',
    id
  };
};
