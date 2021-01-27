import CreateUserService from '../services/CreateUserService';

export default {
  async create(request, response) {
    const { name, email, password } = request.body;

    const user = await CreateUserService.execute({ name, email, password });

    return response.json(user);
  },
};
