const Sequelize = require('sequelize');
const Answer = require('../app/models/Answer');
const Test = require('../app/models/Test');
const User = require('../app/models/User');
const databaseConfig = require('../config/database');

const models = [User, Test, Answer];

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

module.exports = new Database();
