const { verify } = require('jsonwebtoken');

const authConfig = require('../config/auth');
const AppError = require('../errors/AppError');

function checkAuthentication(request, response, next) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppError('JWT token is missing', 401);
  }

  const [, token] = authHeader.split(' ');

  try {
    const decoded = verify(token, authConfig.jwt.secret);

    const { id } = decoded;

    request.user = {
      id,
    };

    return next();
  } catch (err) {
    throw new AppError('Invalid JWT token', 401);
  }
}

module.exports = checkAuthentication;
