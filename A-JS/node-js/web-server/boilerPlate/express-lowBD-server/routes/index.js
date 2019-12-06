var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile('index.html');

});


// router.post('/records',(req, res)=>{

//   console.log(req.body);


// })

module.exports = router;
