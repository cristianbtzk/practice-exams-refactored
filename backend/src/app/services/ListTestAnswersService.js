const AnswersRepository = require('../repositories/AnswersRepository');

module.exports = {
  async execute(test_id) {
    const answers = await AnswersRepository.listAnswersFromTest(test_id);

    return answers;
  },
};
