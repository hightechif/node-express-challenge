var express = require('express');
var router = express.Router();
var studentController = require('../controller/student.controller');

/**
 * Student routes
 */
router.get('/', studentController.getAll);
router.get('/:studentId', studentController.get);
// router.post('/create', studentController.create);
// router.get('/get-by-email', studentController.getByEmail);
// router.get('/get-by-card-number', studentController.getByCardNumber);
// router.get('/get-by-department', studentController.getByDepartment);
// router.put('/edit/:studentId', studentController.update);
// router.delete('/delete/:studentId', studentController.delete);
// router.get('/get-by-book-name', studentController.getByBookName);
// router.get('/get-by-course-name', studentController.getByCourseName);
// router.get('/search', studentController.search);

module.exports = router;
