import AuthenticateUserService from '../services/AuthenticateUserService';

export default {
  async create(request, response) {
    const { email, password } = request.body;

    const user = await AuthenticateUserService.execute({ email, password });

    return response.json(user);
  },
};
