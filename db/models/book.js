'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Book.belongsTo(models.Student, {
        foreignKey: 'student_id',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
      })
    }
  };
  Book.init({
    bookName: DataTypes.STRING
  }, {
    sequelize,
    timestamps: true,
    createdAt: true,
    updatedAt: false,
    modelName: 'Book',
    underscored: true,
    tableName: 'book'
  });
  return Book;
};