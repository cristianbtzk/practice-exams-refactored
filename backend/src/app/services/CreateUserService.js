const { hash } = require('bcrypt');
const UserRepository = require('../repositories/UsersRepository');
const AppError = require('../../errors/AppError');

module.exports = {
  async execute({ name, email, password }) {
    const checkEmail = await UserRepository.findByEmail(email);
    if (checkEmail) {
      throw new AppError('Email already in use', 409);
    }

    const passwordHash = await hash(password, 8);
    const user = await UserRepository.create({
      email,
      name,
      password: passwordHash,
    });

    user.password = undefined;

    return user;
  },
};
