var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path')

router.get('/broken', function(req, res, next){
  throw new Error('Hey Joe something went wrong!')
})


router.get('/forbidden', function(req, res, next) {
  let err = new Error('you tiying ti acces to /forbidden')
  err.statusCode = 403; // for forbidden code 
  next(err);  // to show the hole error
  console.log(err.message);

});

router.get('/download',  function(req, res, next){

  let file = req.query.file; // /download?file=mydata

  fs.readFile( __dirname + '/../data/' + file , 'UTF-8', function(err, data){
    if(err) {next(err)}  
    else{
      res.send(data)
    } 
  });
})


// /devide?x=2&y=3
router.get('/divide',  function(req, res, next){
  try{

    if(req.query.y == 0 ){

      throw new Error('you are dividing by 0')

    }else{
      let sum  =  parseInt(req.query.x) / parseInt(req.query.y)
      res.send(String(sum))
    }

  }catch(err){
   next(err)
  }
})



router.get('/multiply',  function(req, res, next){

  Promise.resolve().then(function(){

    if( req.query.y == 0 || req.query.x  == 0 ){
    
      throw new Error('you are multiply by 0');
    }else if( typeof (req.query.y) == "undefined" || typeof (req.query.x)  == "undefined"){
      
      throw new Error('please put a number');
    }
    else if( typeof (req.query.y) != "NaN" || typeof (req.query.x)  != "NaN"){
      
      throw new Error('please dont write a letters!, Connot convert string to integer');
    }
    else{

      let sum  =  parseInt(req.query.x) * parseInt(req.query.y)
      res.send(String(sum));
    }
  
  }).catch(next)
})


module.exports = router;
