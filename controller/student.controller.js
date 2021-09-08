const { Student } = require('../db/models');

const getAll = (req, res) => {
    Student.findAll()
    .then(data => {
        res.status(200).json({
            status: "SUCCESS",
            data: data
        });
    })
    .catch(err => {
        res.status(500).json({
            status: "FAILED",
            message: "Error retrieving books"
        })
    })
}

const get = (req, res) => {
    const id = req.params.studentId;
    Student.findByPk(id)
        .then(data => {
            res.status(200).json({
                status: "SUCCESS",
                data: data
            });
        })
        .catch(err => {
            res.status(500).json({
                status: "FAILED",
                message: "Error retrieving book with id="+id
            })
        })
}

module.exports = {
    getAll,
    get
}
