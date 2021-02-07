const { Model, DataTypes } = require('sequelize');

class Answer extends Model {
  static init(sequelize) {
    super.init(
      {
        number: DataTypes.INTEGER,
        answer: DataTypes.STRING,
        is_correct: DataTypes.BOOLEAN,
      },
      {
        sequelize,
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.Test, { foreignKey: 'test_id', as: 'test' });
  }
}

module.exports = Answer;
