const request = require('supertest');
const assert = require('assert');
const { Given, When, Then, Before } = require('@cucumber/cucumber');
const truncate = require('../../../utils/truncate');
const app = require('../../../../src/app');

Before(async () => {
  await truncate();
});

const testCreated = createTestResponse => {
  if (createTestResponse.score === 750 && createTestResponse.id) {
    this.status = 'Sucesso';
  }

  return 'erro';
};

Given('um usuário já autenticado', async () => {
  const email = 'email@email.com';
  const name = 'John Doe';
  const password = 'password';

  await request(app).post('/users').send({
    name,
    email,
    password,
  });

  const sessionResponse = await request(app).post('/sessions').send({
    email,
    password,
  });

  this.token = sessionResponse.body.token;
});

When(
  'ocorre um Post na rota tests com o token de acesso e as respostas',
  async () => {
    const response = await request(app)
      .post('/tests')
      .set('Authorization', `Bearer ${this.token}`)
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

    testCreated(response.body);
  }
);

Then('a resposta para o cadastro do teste deve ser {string}', response =>
  assert.strictEqual(this.status, response)
);
