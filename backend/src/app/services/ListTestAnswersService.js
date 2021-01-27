import Answer from '../models/Answer';
// import AppError from '../../errors/AppError';

export default {
  async execute(test_id) {
    const answers = await Answer.findAll({
      where: {
        test_id,
      },
      order: [['number', 'ASC']],
    });

    return answers;
  },
};
