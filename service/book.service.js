const bookRepository = require('../repository/book.repository');

const getAll = () => {
    return bookRepository.findAll();
}

const get = (id) => {
    return bookRepository.findById(id);
} 

module.exports = {
    getAll,
    get
}