const request = require('supertest');
const app = require('../../src/app');

const truncate = require('../utils/truncate');

describe('Test', () => {
  beforeEach(async () => {
    await truncate();
  });

  it('should be able to create Tests', async () => {
    await request(app).post('/users').send({
      name: 'John Doe',
      email: 'johndoe3@gmail.com',
      password: '12345',
    });

    const sessionResponse = await request(app).post('/sessions').send({
      email: 'johndoe3@gmail.com',
      password: '12345',
    });

    const { token } = sessionResponse.body;

    const response = await request(app)
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

    expect(response.body).toHaveProperty('id');
  });

  /* it('should be able to list tests', async () => {
    const userResponse = await request(app).post('/users').send({
      name: 'John Doe',
      email: 'johndoe2@gmail.com',
      password: '12345',
    });

    const sessionResponse = await request(app).post('/sessions').send({
      email: 'johndoe2@gmail.com',
      password: '12345',
    });

    const { token } = sessionResponse.body;

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
      .get(`/tests/1`)
      .set('Authorization', `Bearer ${token}`);

    expect(response.body).toHaveProperty('count');
    expect(response.body.tests).toEqual(
      expect.arrayContaining([
        {
          id: testResponse.body.id,
          score: testResponse.body.score,
          user: {
            name: userResponse.body.name,
            email: userResponse.body.email,
          },
        },
      ])
    );
  }); */
});
