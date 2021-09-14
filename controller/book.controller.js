const bookService = require('../service/book.service');

const getAll = (req, res) => {
    bookService.getAll()
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
    const id = req.params.bookId;
    bookService.get(id)
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
