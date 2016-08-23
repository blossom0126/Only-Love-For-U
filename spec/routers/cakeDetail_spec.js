/**
 * Created by hanyile on 16/8/22.
 */

import app from '../../app';
import request from 'supertest';

describe('get api/cakedetail/:id', ()=> {
  "use strict";

  it('should return cake detail', (done)=> {
    request(app)
        .get('/api/cakedetail/57b294a280a821c918823b7b')
        .expect({"_id":"57b294a280a821c918823b7b","name":"Tiramisu","intro":"瑞士防潮糖粉、新西兰安佳奶油芝士、美雅士朗姆酒、奥利奥坚果底坯","style":"提拉米苏","image":"image/cakelist/01.jpg","__v":0})
        .end((err, doc)=> {
          if (err) {
            done.fail(err);
          } else {
            done();
          }
        });
  });

  it('should return error message', (done)=> {
    request(app)
        .get('/api/cakedetail/57')
        .expect('error')
        .end((err, doc)=> {
          if (err) {
            done.fail(err);
          } else {
            done();
          }
        });
  })

});
