var express = require('express');
var router = express.Router();
const mongo = require('mongodb');
const mongoClient = mongo.MongoClient;

const url = 'mongodb://localhost:27017/';

router.get('/', function(req, res, next) {


    mongoClient.connect(url, (err, db) =>{
        if(err) throw err;
    
        let mydb = db.db('mongoDB');
    
        mydb.collection('Comments').find({ email : 'Nikita@garfield.biz' }).toArray( (err, result) => {
        if(err) throw err;
            res.send(result);
            db.close();
        });
    });
});





module.exports = router;