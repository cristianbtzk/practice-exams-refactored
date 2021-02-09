const database = require('../../src/database');

const truncate = async () => {
  await database.connection.sync({ force: true });
};

/* function truncate() {
  return Promise.all(
    Object.keys(database.connection.models).map(key =>
      database.connection.models[key].destroy({ truncate: true, force: true })
    )
  );
} */

module.exports = truncate;
