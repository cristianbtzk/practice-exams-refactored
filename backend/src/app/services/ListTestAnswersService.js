import AnswersRepository from '../repositories/AnswersRepository';

export default {
  async execute(test_id) {
    const answers = await AnswersRepository.listAnswersFromTest(test_id);

    return answers;
  },
};
