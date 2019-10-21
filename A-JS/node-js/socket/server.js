const net = require('net');
// net.connect()
// net.createConnection()
// net.createServer()
// net.isIP()
// net.isIPv4()
// net.isIPv6()

var server =  net.createServer((socket)=>{
    // socket.address()
    // socket.addListener()
    // socket.connect()
    // socket.destroy()
    // socket.isPaused()
    // socket.ref()
    // socket.setTimeout()
    socket.end('hi!')
})/* .off */ /* .on */ /* .once */ /* .ref */ /* .unref */ .on('error', ( err ) => {
    throw err;
})

server.listen(()=>{
    address = server.address();
    console.log('listining on port', address);
    
})
