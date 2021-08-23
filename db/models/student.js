'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Student extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Book, {
        foreignKey: {
          name: 'student_id',
          allowNull: false,
        },
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
      })
    }
  };
  Student.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    dateOfBirth: DataTypes.DATEONLY
  }, {
    sequelize,
    timestamps: true,
    createdAt: false,
    updatedAt: false,
    modelName: 'Student',
    underscored: true,
    tableName: 'student'
  });
  return Student;
};