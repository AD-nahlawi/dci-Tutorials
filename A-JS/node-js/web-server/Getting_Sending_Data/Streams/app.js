let http = require('http');
const fs = require('fs');

const server =  http.createServer(( request, response ) => {

    response.setHeader('Acces-Control-allow-Origin','*');
    console.log('you are in: ' + request.url);

    switch(request.url){
        
        case '/':
            fs.createReadStream( __dirname + '/index.html').pipe(response);
        break;

        case '/api':
            response.setHeader('Content-Type','application/json');
            response.writeHead(200);
            let data = {'id':10, 'name':'ahmad', 'email':'ahmad@email.com'};
            response.end(JSON.stringify(data));
        break;

        default:
            response.writeHead(404);
            response.end();
    }
});

server.listen(10000, () => {

    console.log( 'listining on port 10000' );
});