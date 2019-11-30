let http = require('http');

// http.request
// http.get

// http.createServer((req, res)=>{

//     res.writeHead(200, {'Content-Type':'text/plain'});
//     res.end('hello Adam')

// }).listen(9000);

// console.log('the Node-js Server running at http://localhost:9000');



const server =  http.createServer((request, response) => {

        response.setHeader('Content-Type','application/json');
        response.setHeader('Acces-Control-allow-Origin','*');

        response.writeHead(200);

        let jsonData = {'id':10,'name':'ahmad','email':'ahmad@email.com'};

        let stringData = JSON.stringify(jsonData);

        response.end(stringData);

});

server.listen(10000, () => {
    console.log('listining on port 10000');
});
