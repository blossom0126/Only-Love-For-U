/**
 * Created by jae on 16-8-22.
 */
export const SelectedCake = (data)=> {
  // console.log('actions/cakeDetailActions/CAKEDETAIL_LOADED:data:' + data);
  return {
    type: 'SELECTED_CAKES_LOADED',
    data
  };
};

export const orderlistinit = (id)=> {
  // console.log('actions/cakeDetailActions/CAKEDETAIl_INITIALIZED:id:' + id);
  return {
    type: 'ORDERLIST_INIT',
    id
  };
};