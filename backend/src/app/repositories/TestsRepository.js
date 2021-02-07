const Test = require('../models/Test');

module.exports = {
  async create({ score, user_id, answers }) {
    const test = await Test.create(
      {
        score,
        user_id,
        answers,
      },
      {
        include: { association: 'answers' },
      }
    );

    return test;
  },

  async findAndCountAll(skipQuantity) {
    const { count, rows } = await Test.findAndCountAll({
      offset: skipQuantity,
      limit: 5,
      attributes: ['id', 'score'],
      order: [['score', 'DESC']],
      include: { association: 'user', attributes: ['name', 'email'] },
    });

    return { count, rows };
  },
};
