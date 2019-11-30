let http = require('http');

let defaultImg = '<img src = "https://picsum.photos/id/191/500/500" /> ';
let pexelsImg = '<img src = "https://picsum.photos/id/192/500/500" /> ';

let html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>

   <div style = 'color:red; display:flex; flex-direction:colum' >
        ${defaultImg}
        ${pexelsImg}
    <div/>

</body>
</html>
`
const server =  http.createServer((request, response) => {
    
        if (request.url){
           console.log('you requested to ' + request.url + ' Page!'); 
        }
        response.setHeader('Content-Type','text/html');
        response.setHeader('Acces-Control-allow-Origin', '*');
        response.writeHead(200);

        if(request.url === '/pexels'){
        }
        response.end(html);
});





server.listen(10000, () => {

    console.log('listining on port 10000');
});
