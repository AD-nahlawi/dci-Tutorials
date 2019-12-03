const express = require('express');

const app = express();

app.get('/', (request, response) => {  // .get is to get the request 

    response.send('hello world!');

}).get('/about', (request, response) => {

    response.send('<h1>About page</h1>');
    
}).get('/users/:name', (request, response)=>{

   let user = request.params.name;
    response.send(`<h1> ${ user } </h1>`);

}).listen(5000, () => {

    console.log('app listining on port 5000');

})