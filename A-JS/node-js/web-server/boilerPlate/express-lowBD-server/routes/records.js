let express = require('express');
let router = express.Router();

// lowdb lib
let lowdb = require('lowdb');
let FileSync = require('lowdb/adapters/FileSync');

let adapter = new FileSync('data/db.json');
let db = lowdb(adapter);
let data = db.get('records');


/* GET records listing. */
router.get('/', function(req, res, next) {
  //res.send('GET records listings');
  res.status(200).send(data)
 
});

/* GET records listing by id. */

router.get('/:id', function(req, res){

  let items = data.filter(function(item){
    // return item.id == req.params.id;
    // if(item.id == req.params.id){
    //   return item.id
    // }
    if(item.id == req.params.id){
      return true
    }
  });

  res.status(200).send(items)
})


/* POST a new record to records */
// router.post('/', function(req, res){

//   // let id = req.body.id + 1; 
//   let title = req.body.title;
//   let price = req.body.price;
  

//   let id = data.__wrapped__.records.length + 1
//   console.log(data);
  
//   db.get('records').push({ id:id, title:title, price:price }).write();
//   res.status(200).send('inserted database has been updated \n')

// })


// router.post('/', function(req, res){

//   // let id = req.body.id + 1; 
//   let title = req.body.title;
//   let price = req.body.price;
//   let count = 0;
//       count = db.get('count')

//   console.log(data);
  
//   db.get('records').push({ id:count, title:title, price:price }).write();
//   res.status(200).send('inserted database has been updated \n')

//   db.update('count', number =>  number = count + 1).write()

// })





router.post('/', function(req, res){


  let  count = db.get('count');
  let title = req.body.title;
  let price = req.body.price;
  
  //Get array of titles
  let arrayTitles =  db.get('records').map('title').value();

  //Check that the new title is not duplicated
  let duplicated = false;
  arrayTitles.forEach((item)=>{
    if (item === title){
        duplicated = true;
    }
  })
  //
  if(duplicated === false){
      db.get('records').push({ id: count, title: title, price: price }).write();
      res.status(200).send('inserted database has been updated \n')
      db.update('count', number =>  number + 1).write()
  }else{
    res.status(409).send('Alreday exist!')
  }



 });





router.post('/delete', function(req, res){

db.get('records').remove({ id: parseInt(req.body.id) }).write()
  // res.status(200).send(req.body.id + 'has deleted')

  res.redirect('/records/')
})


module.exports = router;
