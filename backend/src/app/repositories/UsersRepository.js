import User from '../models/User';

export default {
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
