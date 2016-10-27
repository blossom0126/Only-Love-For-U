import request from 'superagent';
import {browserHistory} from  'react-router';
const personalRequest= store=>next=>action=>{

    switch(action.type){
        case 'PERSONALINFO_LOAD':
            request.post('/users/perfect')
                .type('form')
                .send({
                    username:action.data[0],
                    realName:action.data[1],
                    telphone:action.data[2],
                    address:action.data[3],
                    age:    action.data[4],
                    wechat:  action.data[5]
                })
                .end((err,res)=>{
                  if(res.body.error) {
                      next({
                          type: 'SAVE_FAIR',
                          data: res.body.error
                      })
                  }
                      else if(res.body.data){
                                   next({
                                       type:'SAVE_SUCESSFUL',
                                       data:'保存成功！'
                                   });
                      browserHistory.push('/cakelist');
                      }

                });

            break;
    }
    next(action);
};

export default personalRequest;