'use strict';
module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.createTable('student', {
      id: {
        field: 'id',
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
        type: DataTypes.BIGINT
      },
      firstName: {
        field: 'first_name',
        type: DataTypes.STRING
      },
      lastName: {
        field: 'last_name',
        type: DataTypes.STRING
      },
      email: {
        field: 'email',
        allowNull: false,
        unique: true,
        type: DataTypes.STRING
      },
      dateOfBirth: {
        field: 'date_of_birth',
        type: DataTypes.DATEONLY
      }
    });
  },
  down: async (queryInterface, DataTypes) => {
    await queryInterface.dropTable('student');
  }
};