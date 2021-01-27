import TestRepository from '../repositories/TestsRepository';

export default {
  async execute(page) {
    const skipQuantity = 5 * (page - 1);

    const { count, rows } = await TestRepository.findAndCountAll(skipQuantity);

    return { count, tests: rows };
  },
};
