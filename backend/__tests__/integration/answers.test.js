const request = require('supertest');
const app = require('../../src/app');

const truncate = require('../utils/truncate');

describe('Answer', () => {
  beforeEach(async () => {
    await truncate();
  });

  it('should be able to list test answers', async () => {
    await request(app).post('/users').send({
      name: 'John Doe',
      email: 'johndoe8@gmail.com',
      password: '12345',
    });

    const sessionResponse = await request(app).post('/sessions').send({
      email: 'johndoe8@gmail.com',
      password: '12345',
    });

    const { token } = sessionResponse.body;
    console.log('token:::::', sessionResponse.body);

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
            answer: 'a',
          },
          {
            number: 4,
            answer: 'c',
          },
        ],
      });

    const response = await request(app)
      .get(`/answers/${testResponse.body.id}`)
      .set('Authorization', `Bearer ${token}`);

    expect(response.body).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          number: 1,
          answer: 'a',
        }),
      ])
    );
  });
});
