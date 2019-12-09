var express = require('express');
var router = express.Router();

/* lowDB */
const lowDB = require('lowdb')
const fileSync = require('lowdb/adapters/FileSync');
const adapter = new fileSync('data/db.json');
const db = lowDB(adapter);

/* GET home page. */


router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.get('/myapi',function(req, res){
    res.send( db.get('myObjects') )
});

router.post('/posting/',function(req, res){
    //console.log(db.get('myObjects').__wrapped__.myObjects);
    let UserName = req.body.username;
    let Email = req.body.email;
    let Street = req.body.street;

    let ID = db.get('myObjects').__wrapped__.myObjects.length + 1;
    
    db.get('myObjects').push({id:ID ,username: UserName, email:Email, street:Street }).write();
    //  res.redirect('/')
    
});

router.get('/myapi/:id',function(req, res){
    //console.log(db.get('myObjects').__wrapped__.myObjects);
    let paramsID = req.params.id;
    
    let incommingID = req.body.id;
    let UserName = req.body.username;
    let Email = req.body.email;
    let Street = req.body.street;

    let filteredItems = db.get('myObjects').filter((item)=>{
      if(item.id == paramsID){
        // return true
        return item.id
      }
    })
    
    res.status(200).send(filteredItems)
    
});

router.post('/updating/', function(req, res){
    let Id = req.body.id
    let UserName = req.body.username;
    let Email = req.body.email;
    let Street = req.body.street;

    // db.update('myObjects', (myObjects)=>{})
    // db('myObjects').find({ id: Id }).assign({username: UserName,email:Email,street:Street}).value()
    res.send('database has been updated!')
    

})
module.exports = router;
