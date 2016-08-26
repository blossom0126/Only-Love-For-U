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
        .expect({
          "_id": "57b294a280a821c918823b7b",
          "name": "Tiramisu",
          "intro": "瑞士防潮糖粉、新西兰安佳奶油芝士、美雅士朗姆酒、奥利奥坚果底坯",
          "style": "提拉米苏",
          "image": "image/cakelist/01.jpg",
          "price": 188,
          "size": "2磅",
          "infore": "第一次见到你，我的目光已不由自主的被你占据，我的这颗心将被你征服，当你喊出我的名字时，我知道你是人群中最特别的，现在的我如此渴望能够与你再次相逢。",
          "inforc": "You captured my heart and soul at the first sight. When you call my name, I hear the sweetest voice singing the song of nature. I long for another chance to see you and to hear you again.",
          "__v": 0
        })
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
