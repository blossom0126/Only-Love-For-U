const personalInfo = (state = '',action)=>{
    switch (action.type){
        case 'SAVE_FAIR':

            return action.data;

        case 'SAVE_SUCESSFUL':

            return action.data;


    }
    return state;
};

export default personalInfo;