const CreateTestService = require('../services/CreateTestService');
const ListTestsService = require('../services/ListTestsService');

module.exports = {
  async create(request, response) {
    const { answers } = request.body;
    const user_id = parseInt(request.user.id, 10);

    const test = await CreateTestService.execute({ user_id, answers });

    return response.json(test);
  },

  async index(request, response) {
    const { page } = request.params;

    const tests = await ListTestsService.execute(parseInt(page, 10));

    return response.json(tests);
  },
};
