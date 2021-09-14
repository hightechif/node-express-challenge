const studentRepository = require('../repository/student.repository');
const bookRepository = require('../repository/book.repository');

const getAll = () => {
    return studentRepository.findAll();
}

const get = (id) => {
    return studentRepository.findById(id);
}

module.exports = {
    getAll,
    get
}