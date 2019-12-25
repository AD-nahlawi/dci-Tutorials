const mongo = require('mongodb');
const mongoClient = mongo.MongoClient;

const url = 'mongodb://localhost:27017/';


mongoClient.connect(url, (err, db) =>{

    if(err) throw err;
    let mydb = db.db('mybd');




    //  {name: 1}; // ascecding = > a, b, c
    //  {name: -1}; // ascecding = > c, d, a

    mydb.collection('custermers').find().sort( {name : 1 } ).toArray( ( err, result)  => {
    if(err) throw err; 
        console.log('Sorting the list...');
        console.log(result);
        db.close();
    });

});

// let arr = new Array('').length
