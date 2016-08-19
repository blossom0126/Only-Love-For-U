import app from '../../app';
import request from 'supertest';
/*global describe,it,expect*/
describe('post /users', function () {
  it('should get parameter by j', (done)=> {
    request(app)
        .post('/users')
        .type('form')
        .send({
          username: 'wangting@163.com',
          password: 'wt1234'
        })
        .end((err, doc)=> {
          let result = {
            username: doc.body.username,
            password: doc.body.password
          };
          expect(result).toEqual({
            'username': 'wangting@163.com',
            'password': 'wt1234',
          });
          if (err) {
            done.fail(err);
          } else {
            done();
          }
        });
  });
});

