const express = require('express');
const router = express.Router();
const lowDB = require('lowdb')
const fileSync = require('lowdb/adapters/FileSync');
const adapter = new fileSync('data/db.json');
const db = lowDB(adapter);


router.get('/',function(req, res){
res.send( db.get('myObjects') )
});


router.post('/post',function(req, res){
    
    //console.log(db.get('myObjects').__wrapped__.myObjects);
    let UserName = req.body.username;
    let Email = req.body.email;
    let Street = req.body.street;
    let ID = db.get('myObjects').__wrapped__.myObjects.length + 1;
    
    db.get('myObjects').push({id:ID ,username: UserName, email:Email, street:Street }).write();

    res.redirect('/')
 
    
});

module.exports = router;