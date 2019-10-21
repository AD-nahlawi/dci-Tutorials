let http = require('http');

// http.request
// http.get
http.createServer((req, res)=>{
    res.writeHead(200, {'Content-Type':'text/plain'});
    res.end('hello Adam')
}).listen(9000);

console.log('the Node-js Server running at http://localhost:9000');








