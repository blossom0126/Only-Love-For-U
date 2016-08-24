/*global describe,it,expect*/
/**
 * Created by qinqi on 16-8-24.
 */
import app from '../../app';
import request from 'supertest';
describe('get api/order', ()=> {
  it('should return id', (done)=> {
    const agent = request.agent(app);
    agent
      .post('/api/order/')
      .type('form')
      .send({
        name:'5',
        tel:'5',
        address:'5',
        more:'5',
        cakeName:'5',
        image:'image/cakelist/02.jpg',
        isPay:false,
        price:100
      })
      .end((err, order)=> {
        if(!err){
          agent.get('/'+order).end((err,res)=> {
            expect(res.status).toEqual(200);
            expect(res.body.price).toEqual(100);
          });
          done();
        }
      });
  });
});






