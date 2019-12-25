const mongo = require('mongodb');
const mongoClient = mongo.MongoClient;
const url = 'mongodb://localhost:27017/';



mongoClient.connect(url, (err, db) =>{
    
    if(err) throw err;
    let mydb = db.db('mybd');

    mydb.collection('custermers').drop(function(err, delOk){
        if(err) throw err;
        if(delOk) console.log('Collection deleted');
        db.close();
    });
});

