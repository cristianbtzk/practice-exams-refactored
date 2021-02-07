const AuthenticateUserService = require('../services/AuthenticateUserService');

module.exports = {
  async create(request, response) {
    const { email, password } = request.body;

    const user = await AuthenticateUserService.execute({ email, password });

    return response.json(user);
  },
};
