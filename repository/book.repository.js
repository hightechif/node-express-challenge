const { Book } = require('../db/models')

const findAll = () => {
    return Book.findAll();
}

const findById = (id) => {
    return Book.findByPk(id)
}

module.exports = {
    findAll,
    findById
}