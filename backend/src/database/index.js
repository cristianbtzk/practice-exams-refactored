import Sequelize from 'sequelize';
import Test from '../app/models/Test';
import User from '../app/models/User';
import databaseConfig from '../config/database';

const models = [User, Test];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models.map(model => model.init(this.connection));

    models.forEach(model => {
      if (model.associate) {
        model.associate(this.connection.models);
      }
    });
  }
}

export default new Database();
