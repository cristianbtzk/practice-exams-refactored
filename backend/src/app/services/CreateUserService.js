import { hash } from 'bcrypt';
import User from '../models/User';
import AppError from '../../errors/AppError';

class CreateUserService {
  async execute({ name, email, password }) {
    const checkEmail = await User.findOne({
      where: {
        email,
      },
    });

    if (checkEmail) {
      throw new AppError('Email already in use');
    }

    const passwordHash = await hash(password, 8);
    const user = await User.create({
      email,
      name,
      password: passwordHash,
    });

    delete user.password;

    return user;
  }
}

export default new CreateUserService();
