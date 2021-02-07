const User = require('../models/User');

module.exports = {
  async create({ name, email, password }) {
    const user = await User.create({ name, email, password });

    return user;
  },

  async findByEmail(email) {
    const user = await User.findOne({
      where: {
        email,
      },
    });

    return user;
  },
};
