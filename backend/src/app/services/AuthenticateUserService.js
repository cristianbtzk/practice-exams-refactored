const { compare } = require('bcrypt');
const { sign } = require('jsonwebtoken');

const UserRepository = require('../repositories/UsersRepository');
const AppError = require('../../errors/AppError');
const authConfig = require('../../config/auth');

module.exports = {
  async execute({ email, password }) {
    const user = await UserRepository.findByEmail(email);

    if (!user) {
      console.log('Não encontda');
      throw new AppError('Incorrect data.', 401);
    }

    const checkPasswordMatches = await compare(password, user.password);

    if (!checkPasswordMatches) {
      throw new AppError('Incorrect data', 401);
    }

    const { secret, expiresIn } = authConfig.jwt;

    const token = sign({ id: user.id }, secret, {
      expiresIn,
    });

    user.password = undefined;

    return { user, token };
  },
};
