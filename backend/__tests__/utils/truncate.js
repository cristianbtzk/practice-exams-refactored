import database from '../../src/database';

export default function truncate() {
  return Promise.all(
    Object.keys(database.connection.models).map(model =>
      database.connection.models[model].destroy({
        where: {},
        force: true,
      })
    )
  );
}
