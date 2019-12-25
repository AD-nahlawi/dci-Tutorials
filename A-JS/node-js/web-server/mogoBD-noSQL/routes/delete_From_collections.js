const mongo = require('mongodb');
const mongoClient = mongo.MongoClient;
const url = 'mongodb://localhost:27017/';


mongoClient.connect(url, (err, db) =>{

    if(err) throw err;
    let mydb = db.db('mybd');

    mydb.collection('customers').deleteOne({name:'zalando'}, (err, object)=>{
        if(err) throw err;
            console.log('delete the first co') 
        db.close();
    })
});




mongoClient.connect(url, (err, db) =>{
    
    if(err) throw err;

    let mydb = db.db('mybd');

    mydb.collection('custermers').deleteMany({ name :'zalando' }, function(err, object){
        if(err) throw err;
            console.log(object.result.n + 'document(s) deleted!');
            db.close();
        });
})



// mongoClient.connect(url, (err, db) =>{

//     if(err) throw err;

//     let mydb = db.db('mybd');

//     mydb.collection('custermers').find({ name :'zalando' }).toArray( (err, result) => {
//     if(err) throw err;
//         console.log(result);
//         db.close();
//     });
// })

