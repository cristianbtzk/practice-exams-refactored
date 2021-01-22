import CreateUserService from '../services/CreateUserService';

class UsersController {
  async create(request, response) {
    const { name, email, password } = request.body;

    const user = await CreateUserService.execute({ name, email, password });

    return response.json(user);
  }
}

export default new UsersController();
