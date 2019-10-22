const net = require('net'); 

var server =  net.createServer( ( socket ) => { 
      socket.end('hi!');
})
.on('error', ( err ) => {
    throw err;
});

server.listen( () => {
    server_address = server.address();
    console.log('listining on port', server_address );
    
});

