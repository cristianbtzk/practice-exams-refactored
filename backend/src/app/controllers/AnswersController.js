import ListTestAnswersService from '../services/ListTestAnswersService';

class TestsController {
  async index(request, response) {
    const { test_id } = request.params;

    const answers = await ListTestAnswersService.execute(test_id);

    return response.json(answers);
  }
}

export default new TestsController();
