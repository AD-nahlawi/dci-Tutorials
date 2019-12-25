const mongo = require('mongodb');
const mongoClient = mongo.MongoClient;

const url = 'mongodb://localhost:27017/';


// mongoClient.connect(url, (err, db) =>{
//     if(err) throw err;

//     let mydb = db.db('mybd');


//     mydb.collection('custermers').findOne({}, (err, result) => {
//     if(err) throw err;
//         console.log(result.name);
//         console.log(result.address);
//         db.close();
//     });
// })




//// get lost of all documents
// mongoClient.connect(url, (err, db) =>{
//     if(err) throw err;

//     let mydb = db.db('mybd');


//     mydb.collection('custermers').find({}).toArray( (err, result) => {
//     if(err) throw err;
//         console.log(result);
//         db.close();
//     });
// })

// querys

mongoClient.connect(url, (err, db) =>{
    if(err) throw err;

    let mydb = db.db('mybd');
    let query = {name:'facebook'}


    mydb.collection('custermers').find(query).toArray( (err, result) => {
    if(err) throw err;
        console.log(result);
        db.close();
    });
})
