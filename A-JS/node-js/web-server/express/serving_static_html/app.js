const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');


let users = [

    {firstName:'John', lastname:'Doe', age:55, job:'React dev'},
    {firstName:'dohn', lastname:'san', age:40, job:'node dev'},
    {firstName:'thomas', lastname:'muller', age:30, job:'php dev'}

];


const server = express();
server.use(express.static( path.join( __dirname, 'public')));

server.get('/users', ( request , response ) => {

    response.json( users )
})

server.get('/download', ( request , response )=>{

    response.download(path.join( __dirname, 'downloads','file.pdf'))
})



server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: false}));
server.post('/subscribe', ( request, response ) => {

    // console.log(request)
    console.log(request.body)
    console.log(request.headers["user-agent"])
    // let email = request.body.email;
    // let name = request.body.name;
    
})



server.get('/about', ( request , response )=>{

    response.redirect('/about.html')
})



server.listen( 3333 ,'10.10.0.77', () => {

    console.log('listining on port 3333');
})