const studentService = require('../service/student.service');

// const create = async (req, res) => {
//     var responseData;

//     if (!req.body.email) {
//         res.status(400).json({
//             result: "FAILED",
//             message: "email field cannot be empty."
//         });
//     }
    
//     const student = {
//         firstName: req.body.firstName,
//         lastName: req.body.lastName,
//         email: req.body.email,
//         dateOfBirth: req.body.dateOfBirth
//     };

//     const bookList = req.body.books;
    
//     var studentId;
//     await Student.create(student, {include: [Book]})
//         .then(data => {
//             studentId = data.dataValues.id;      
//             responseData = data.dataValues;
//         })
//         .catch(err => {
//             res.status(500).json({
//                 result: "FAILED",
//                 message: err.message || "Some error occurred while creating the Player."
//             });
//         });
    
//     var books = []
//     for (let element of bookList) {
//         const book = {
//             bookName: element.bookName,
//             studentId: studentId,
//             createdAt: Date()
//         }

//         await Book.create(book)
//             .then(async (data) => {
//                 await books.push(data.dataValues);
//             })
//             .catch(err => {
//                 res.status(500).json({
//                     result: "FAILED",
//                     message: err.message || "Some error occurred while creating the Player."
//                 });
//             });
//     }

//     responseData = {
//         ...responseData,
//         books
//     }

//     res.status(200).json({
//         result: "SUCCESS",
//         message: responseData
//     });
// }

const getAll = (req, res) => {
    studentService.getAll()
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
    studentService.get(id)
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
    // create,
    getAll,
    get
}
