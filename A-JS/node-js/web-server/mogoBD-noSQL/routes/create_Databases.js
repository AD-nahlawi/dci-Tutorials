
var express = require('express');
var router = express.Router();
const mongo = require('mongodb');
const mongoClient = mongo.MongoClient;


mongoClient.connect('mongodb://localhost:27017/mongoDB',function(err, db){
  if(err) throw err;
  console.log('Database created');
  db.close();
})



router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
