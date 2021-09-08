const { Book } = require('../db/models');

const getAll = (req, res) => {
    let data =  Book.findAll();
    return res.status(400).json(data);
}

module.exports = {
    getAll
}