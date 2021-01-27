import ListTestAnswersService from '../services/ListTestAnswersService';

export default {
  async index(request, response) {
    const { test_id } = request.params;

    const answers = await ListTestAnswersService.execute(parseInt(test_id, 10));

    return response.json(answers);
  },
};
