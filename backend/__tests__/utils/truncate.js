const database = require('../../src/database');

const truncate = async () => {
  await database.connection.sync({ force: true });
};

module.exports = truncate;
