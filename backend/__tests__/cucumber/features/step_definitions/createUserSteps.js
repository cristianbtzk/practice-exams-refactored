const request = require('supertest');
const assert = require('assert');
const { Given, When, Then, Before } = require('@cucumber/cucumber');
const truncate = require('../../../utils/truncate');
const app = require('../../../../src/app');

Before(async () => {
  await truncate();
});

const userCreated = user => {
  if (user.name === 'John Doe') {
    console.log('ASDHASIUDSHA');
    this.status = 'Sucesso';
  }

  return 'erro';
};

Given('um nome, senha e email validos', () => {
  this.email = 'email@email.com';
  this.name = 'John Doe';
  this.password = 'password';
});

When('ocorre um Post na rota users', async () => {
  const response = await request(app).post('/users').send({
    name: this.name,
    email: this.email,
    password: this.password,
  });

  userCreated(response.body);
});

Then('a resposta deve ser {string}', response =>
  assert.strictEqual(this.status, response)
);
