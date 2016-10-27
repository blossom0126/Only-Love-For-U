/**
 * Created by liuru on 16-10-25.
 */
import request from 'superagent';
import {personalCollection } from '../actions/personalCollection';
import {browserHistory} from 'react-router';

const collectionMiddleWare =store =>next=>action=>{
    switch(action.type){
        case 'COLLECTION_INITIALIZED':
            request.get(`/api/cakedetail/${action.id}`)
                .end((err,res)=>{
                    if(res.status===200){
                        next(personalCollection(res.body));
                    }else if(res.status===404){
                        browserHistory.push('/404');
                    }
                });
            break;
    }
    next(action);
};

export default collectionMiddleWare;