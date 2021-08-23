var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect("/api/v1")
});

router.get('/view', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
