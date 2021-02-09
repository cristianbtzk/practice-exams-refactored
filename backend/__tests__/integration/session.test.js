const request = require('supertest');
const app = require('../../src/app');

const truncate = require('../utils/truncate');

describe('Session', () => {
  it('should be able to authenticate', async () => {
    await request(app).post('/users').send({
      name: 'John Doe',
      email: 'johndoe4@gmail.com',
      password: '12345',
    });

    const response = await request(app).post('/sessions').send({
      email: 'johndoe4@gmail.com',
      password: '12345',
    });

    expect(response.body).toHaveProperty('token');
  });

  it('should not be able to authenticate with incorrect email', async () => {
    await request(app).post('/users').send({
      name: 'John Doe',
      email: 'johndoe5@gmail.com',
      password: '12345',
    });

    const response = await request(app).post('/sessions').send({
      email: 'incorrect@gmail.com',
      password: '12345',
    });

    expect(response.status).toBe(401);
  });

  it('should not be able to authenticate with incorrect password', async () => {
    await request(app).post('/users').send({
      name: 'John Doe',
      email: 'johndoe6@gmail.com',
      password: '12345',
    });

    const response = await request(app).post('/sessions').send({
      email: 'johndoe6@gmail.com',
      password: '123456',
    });

    expect(response.status).toBe(401);
  });
});
