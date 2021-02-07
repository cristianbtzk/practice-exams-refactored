const request = require('supertest');
const assert = require('assert');
const { Given, When, Then, Before } = require('@cucumber/cucumber');
const truncate = require('../../../utils/truncate');
const app = require('../../../../src/app');

Before(async () => {
  await truncate();
});

const verifyTestsList = listResponse => {
  if (listResponse.count === 1 && listResponse.tests.length === 1) {
    this.status = 'Sucesso';
  }

  return 'erro';
};

Given(
  'um usuário já autenticado e pelo menos um teste cadastrado no banco',
  async () => {
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

    const createTestResponse = await request(app)
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

    this.test_id = createTestResponse.body.id;
  }
);

When(
  'ocorre um GET na rota tests com o token de acesso e o número da página',
  async () => {
    const response = await request(app)
      .get(`/tests/1`)
      .set('Authorization', `Bearer ${this.token}`);
    verifyTestsList(response.body);
  }
);

Then('a resposta para a listagem de testes deve ser {string}', response =>
  assert.strictEqual(this.status, response)
);
