module.exports = {
  dialect: 'postgres',
  host: 'psycho-exams-postgres',
  username: 'postgres',
  password: 'docker',
  database: 'exams',
  define: {
    timestamps: true,
    underscored: true,
  },
};
