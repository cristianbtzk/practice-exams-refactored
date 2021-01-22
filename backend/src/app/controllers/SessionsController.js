import AuthenticateUserService from '../services/AuthenticateUserService';

class SessionsController {
  async create(request, response) {
    const { email, password } = request.body;

    const user = await AuthenticateUserService.execute({ email, password });

    return response.json(user);
  }
}

export default new SessionsController();
