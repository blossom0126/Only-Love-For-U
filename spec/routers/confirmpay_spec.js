import app from '../../app';
import request from 'supertest';
/*global describe,it,done*/
describe('/api/order/:id', function () {
  it('should display confirm order information', function () {
    const id = '12345678';
    request(app)
        .get(`/${id}`)
        .expect([{
          '_id': '57bc498217c7e4a96ca06d1a',
          'name': '张三',
          'tel': '18829290000',
          'address': '陕西省西安市邮电大学',
          'more': '请尽快发货',
          'cakeName': 'Rainbow Paris',
          'image': 'image/cakelist/08.jpg',
          'price': 125,
          'isPay': false,
          '__v': 0
        }])
        .end((err) => {
          if (err) {
            done.fail(err);
          } else {
            done();
          }
        });
  });
});

describe('/api/order/:id', function () {
  it('should return statuscode 205', function () {
    request(app)
      .put('/:id')
      .type('form')
      .send({isPay: true})
      .expect(205)
      .end((err) => {
        if (err) {
          done.fail(err);
        } else {
          done();
        }
      });
  });
});
