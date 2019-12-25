var express = require('express');
var mysql   = require('mysql');
var router = express.Router();

/* GET users listing. */


var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    database : 'company',
    //insecureAuth :true
});

    connection.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
    });

router.get('/', function(req, res, next) {

    connection.query('SELECT * FROM employee', function (error, results, fields) {
      if ( error ) throw error;
      let database =  results.map((item) =>{
        return `
                    <h1>${item.id}</h1>
                    <h1>${item.firstname}</h1>
                    <h1>${item.lastname}</h1>
                    <h1>${item.salary}</h1>
                    <h1>${item.dep}</h1>
                    <h1>${item.employee_email}</h1>
             `
        })

        res.status(200).send ( ( database ) .toString());
        // res.status(200).send (database.toString());

    });

   // connection.end();
});
// for(let r of x){

// }


router.get('/createdb', function(req, res, next) {

    let sql = 'CREATE DATABASE nodemysql';
    connection.query(sql, (err, results)=>{
        if (err) throw err;

        console.log(results)
        res.send('database created...');

    })

});


router.get('/addpost1', function(req, res, next) {

    let sql = "insert into posts (id , title , body) VALUES (NULL,'title 8 ', 'body of title 8')";

    let query = connection.query(sql, (err, results)=>{
        if(err) throw err;
        res.send('Post 1 added')
    })

});





module.exports = router;
