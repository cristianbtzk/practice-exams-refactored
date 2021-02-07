const request = require('supertest');
const assert = require('assert');
const { Given, When, Then, Before } = require('@cucumber/cucumber');
const truncate = require('../../../utils/truncate');
const app = require('../../../../src/app');

Before(async () => {
  await truncate();
});

const userAuthenticated = authenticateResponse => {
  if (authenticateResponse.token) {
    this.status = 'Sucesso';
  }

  return 'erro';
};

Given('um usuário já cadastrado', async () => {
  this.email = 'email@email.com';
  this.name = 'John Doe';
  this.password = 'password';

  await request(app).post('/users').send({
    name: this.name,
    email: this.email,
    password: this.password,
  });
});

When('ocorre um Post na rota sessions com email e senha válidos', async () => {
  const response = await request(app).post('/sessions').send({
    email: this.email,
    password: this.password,
  });

  userAuthenticated(response.body);
});

Then('a resposta para a autenticação deve ser {string}', response =>
  assert.strictEqual(this.status, response)
);
