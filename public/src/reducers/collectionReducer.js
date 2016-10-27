/**
 * Created by liuru on 16-10-25.
 */
const collectionCake= (state = [], action)=>{
    switch(action.type){
        case 'COLLECTION_ADD':
            return action.data;
    }
    return state;
};
export default collectionCake;