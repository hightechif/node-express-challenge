const { Student } = require('../db/models');

const findAll = () => {
    return Student.findAll();
}

const findById = (id) => {
    return Student.findById(id);
}

module.exports = {
    findAll,
    findById
}