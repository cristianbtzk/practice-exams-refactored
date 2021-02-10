const request = require('supertest');
const app = require('../../src/app');

describe('User', () => {
  it('should be able to register', async () => {
    const response = await request(app).post('/users').send({
      name: 'John Doe',
      email: 'johndoe@gmail.com',
      password: '12345',
    });

    expect(response.body).toHaveProperty('id');
  });

  it('should not be able to register with email already in use', async () => {
    await request(app).post('/users').send({
      name: 'John Doe',
      email: 'usedemail@gmail.com',
      password: '12345',
    });

    const response = await request(app).post('/users').send({
      name: 'John Doe',
      email: 'usedemail@gmail.com',
      password: '12345',
    });

    expect(response.status).toBe(409);
  });
});
