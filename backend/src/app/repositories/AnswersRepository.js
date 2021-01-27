import Answer from '../models/Answer';

export default {
  async listAnswersFromTest(test_id) {
    const answers = await Answer.findAll({
      where: {
        test_id,
      },
      order: [['number', 'ASC']],
    });

    return answers;
  },
};
