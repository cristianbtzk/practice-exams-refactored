import Test from '../models/Test';
// import AppError from '../../errors/AppError';

export default {
  async execute(page) {
    const skipQuantity = 5 * (page - 1);

    const { count, rows } = await Test.findAndCountAll({
      offset: skipQuantity,
      limit: 5,
      attributes: ['id', 'score'],
      order: [['score', 'DESC']],
      include: { association: 'user', attributes: ['name', 'email'] },
    });

    return { count, tests: rows };
  },
};
