let http = require('http');
const fs = require('fs');

const server =  http.createServer((request, response) => {
    
        if (request.url){
           console.log('you requested to ' + request.url + ' Page!'); 
        }

        // response.setHeader('Content-Type','text/plain');
        response.setHeader('Content-Type','text/html');
        response.setHeader('Acces-Control-allow-Origin', '*');
        response.writeHead(200);


        let html = fs.readFileSync(__dirname + '/index.html', 'utf8');
        let message = '<h1>Hi from the server side!</h1>';
        let defaultImg = 'https://picsum.photos/id/191/500/500';
        let pexelsImg = 'https://images.pexels.com/photos/3201761/pexels-photo-3201761.jpeg?cs=srgb&dl=gray-beddings-3201761.jpg&fm=jpg';

        html = html.replace('{message}',message);
        html = html.replace('{defaultImg}',defaultImg);

       console.log(response);
       
        if(request.url === '/pexels'){

            html = html.replace('{defaultImg}', pexelsImg );
            response.end(html);

        }
    
        response.end(html);

});

server.listen(10000, () => {

    console.log('listining on port 10000');
});
