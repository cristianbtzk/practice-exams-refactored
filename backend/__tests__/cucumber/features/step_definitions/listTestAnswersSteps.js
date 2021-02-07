const request = require('supertest');
const assert = require('assert');
const { Given, When, Then, Before } = require('@cucumber/cucumber');
const truncate = require('../../../utils/truncate');
const app = require('../../../../src/app');

Before(async () => {
  await truncate();
});

const verifyAnswersList = listResponse => {
  if (listResponse.length === 4) {
    this.status = 'Sucesso';
  }

  return 'erro';
};

Given('um usuário já autenticado e um teste cadastrado no banco', async () => {
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
});

When(
  'ocorre um GET na rota answers com o token de acesso e o id do teste',
  async () => {
    const response = await request(app)
      .get(`/answers/${this.test_id}`)
      .set('Authorization', `Bearer ${this.token}`);
    verifyAnswersList(response.body);
  }
);

Then('a resposta para o a listagem de respostas deve ser {string}', response =>
  assert.strictEqual(this.status, response)
);
