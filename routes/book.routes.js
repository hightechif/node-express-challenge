var express = require('express');
var router = express.Router();
var bookController = require('../controller/book.controller');

/**
 * Book routes
 */
router.get('/', bookController.getAll);
// router.get('/:studentId', bookController.get);
// router.post('/create', bookController.create);
// router.get('/get-by-email', bookController.getByEmail);
// router.get('/get-by-card-number', bookController.getByCardNumber);
// router.get('/get-by-department', bookController.getByDepartment);
// router.put('/edit/:studentId', bookController.update);
// router.delete('/delete/:studentId', bookController.delete);
// router.get('/get-by-book-name', bookController.getByBookName);
// router.get('/get-by-course-name', bookController.getByCourseName);
// router.get('/search', bookController.search);

module.exports = router;
