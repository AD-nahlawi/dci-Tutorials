var express = require('express');
var router = express.Router();

let data = { userList: ['maemail','addressss','ahmad'] }



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('users', data);
});

module.exports = router;
