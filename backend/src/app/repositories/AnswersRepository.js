const Answer = require('../models/Answer');

module.exports = {
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
