const mongo = require('mongodb');
const mongoClient = mongo.MongoClient;

const url = 'mongodb://localhost:27017/';

mongoClient.connect(url, (err, db) => {
    if(err) throw err;

    let mydb = db.db('mongoDB');

    mydb.createCollection('Comments', (err, res)=>{
        if(err) throw err;

        console.log('Collection created!');
        db.close();
    });


})


