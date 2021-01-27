import request from 'supertest';
import app from '../../src/app';

import truncate from '../utils/truncate';

describe('Answer', () => {
  beforeEach(async () => {
    await truncate();
  });
  it('should be able to list test answers', async () => {
    await request(app).post('/users').send({
      name: 'John Doe',
      email: 'johndoe@gmail.com',
      password: '12345',
    });

    const sessionResponse = await request(app).post('/sessions').send({
      email: 'johndoe@gmail.com',
      password: '12345',
    });

    const { token } = sessionResponse.body;
    console.log('asdADSA', token);
    const testResponse = await request(app)
      .post('/tests')
      .set('Authorization', `Bearer ${token}`)
      .send({
        answers: [
          {
            number: 1,
            answer: 'a',
          },
          {
            number: 2,
            answer: 'e',
          },
          {
            number: 3,
            answer: 'b',
          },
          {
            number: 4,
            answer: 'c',
          },
        ],
      });

    const response = await request(app)
      .get(`/answers/${testResponse.id}`)
      .set('Authorization', `Bearer ${token}`);

    expect(response.body).toEqual(
      expect.arrayContaining([
        {
          number: 1,
        },
      ])
    );
  });
});
