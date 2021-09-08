const { Student } = require('../db/models');

const getAll = (req, res) => {
    let data =  Student.findAll();
    return res.status(400).json(data);
}

module.exports = {
    getAll
}