export const personalCollection = (data)=>{
    return {
        type:'COLLECTION_ADD',
        data
    };
};

export const collectionById = (id)=> {
    return {
        type: 'COLLECTION_INITIALIZED',
        id
    };
};