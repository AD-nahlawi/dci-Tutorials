const mongo = require('mongodb');
const mongoClient = mongo.MongoClient;
const url = 'mongodb://localhost:27017/';
const fetch = require('node-fetch')


// mongoClient.connect(url, (err, db) =>{
//     if(err) throw err;

//     let mydb = db.db('mybd');
//     let myobj1 = {name:'google', address:'Silicon Valley'};

//     mydb.collection('custermers').insertOne(myobj1, (err, res) => {
//         if(err) throw err;
//             console.log('1st document inserted');
//             db.close();
//     })
// })


// mongoClient.connect(url, (err, db) =>{
//     if(err) throw err;

//     let mydb = db.db('mybd');
//     let myobj2 = {name:'facebook', address:'new work'};

//     mydb.collection('custermers').insertOne(myobj2, (err, res) => {
//         if(err) throw err;
//             console.log('2st document inserted');
//             db.close();
//     })
// })


// mongoClient.connect(url, (err, db) =>{
//     if(err) throw err;

//     let mydb = db.db('mybd');

//     let myobj3 = {name:'zalando', address:'brasil'};

//     mydb.collection('custermers').insertOne(myobj3, (err, res) => {
//         if(err) throw err;
//             console.log('2st document inserted');
//             db.close();
//     })
// })


mongoClient.connect(url, (err, db) =>{

    if(err) throw err;
    let mydb = db.db('mongoDB');

    fetch('https://jsonplaceholder.typicode.com/comments').then(res => res.json()).then(data =>{

        mydb.collection('Comments').insert(data, (err, res) => {
        if(err) throw err;

            console.log('data is inserted');
            db.close();
    })
  })
})

