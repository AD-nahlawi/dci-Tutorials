# const net = require('net'); 
* net.createServer()
* net.connect()
* net.createConnection()
* net.isIP()
* net.isIPv4()
* net.isIPv6()
=====================================
var server =  net.createServer( ( socket ) => { 
   * socket.address()
   * socket.addListener()
   * socket.connect()
   * socket.destroy()
   * socket.isPaused()
   * socket.ref()
   * socket.setTimeout()

      socket.end('hi!');
})/* .off */ /* .on */ /* .once */ /* .ref */ /* .unref */ 
.on('error', ( err ) => {
    throw err;
});
========================================

* server.addListener()
* server.address()
* server.close()
* server.emit()
* server.eventNames()
* server.getConnections()
* server.getMaxListeners()
* server.listen()
* server.listenerCount()
* server.listeners()
* server.off()
* server.on()
* server.once()
* server.prependListener()
* server.prependOnceListener()
* server.rawListeners()
* server.ref()
* server.removeAllListeners()
* server.removeListener()
* server.setMaxListeners()
* server.unref()


========================================

server.on('close')
server.on('connection')
server.on('error')
server.on('listening')