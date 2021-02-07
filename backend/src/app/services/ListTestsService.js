const TestRepository = require('../repositories/TestsRepository');

module.exports = {
  async execute(page) {
    const skipQuantity = 5 * (page - 1);

    const { count, rows } = await TestRepository.findAndCountAll(skipQuantity);

    return { count, tests: rows };
  },
};
