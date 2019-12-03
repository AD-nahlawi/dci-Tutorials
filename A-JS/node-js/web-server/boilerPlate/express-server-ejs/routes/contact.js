var express = require('express');
var router = express.Router();

let data = {
    email: 'maemail',
    add: 'addressss',
    name:'ahmad'
}


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('contact', data);
});

module.exports = router;
