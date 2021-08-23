'use strict';
module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.createTable('book', {
      id: {
        field: 'id',
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
        type: DataTypes.BIGINT
      },
      bookName: {
        field: 'book_name',
        allowNull: false,
        type: DataTypes.STRING
      },
      studentId: {
        field: 'student_id',
        allowNull: false,
        type: DataTypes.BIGINT,
        unique: true,
        references: {
          model: 'student',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      createdAt: {
        field: 'created_at',
        allowNull: false,
        type: DataTypes.DATE
      }
    });
  },
  down: async (queryInterface, DataTypes) => {
    await queryInterface.dropTable('book');
  }
};