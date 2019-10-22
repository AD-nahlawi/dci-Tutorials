# const net = require('net'); 
* net.createServer()
* net.connect()
* net.createConnection()
* net.isIP()
* net.isIPv4()
* net.isIPv6()
===========================================================
var client = net.connect( { port : 36059 } , () => {
    console.log('connected ! ');
    client.write('hi! am  Client! ');


}).on('error', ( err ) => {
    throw err;
});

==========================================================

* client._destroy()
* client._final()
* client._read()
* client._write()
* client._writev()
* client.addListener()
* client.address()
* client.connect()
* client.cork()
* client.destroy()
* client.emit()
* client.end()
* client.eventNames()
* client.getMaxListeners()
* client.isPaused()
* client.listenerCount()
* client.listeners()
* client.off()
* client.on()
* client.once()
* client.pause()
* client.pipe()
* client.prependListener()
* client.prependOnceListener()
* client.push()
* client.rawListeners()
* client.read()
* client.ref()
* client.removeAllListeners()
* client.removeListener()
* client.resume()
* client.setDefaultEncoding()
* client.setEncoding()
* client.setKeepAlive()
* client.setMaxListeners()
* client.setNoDelay()
* client.setTimeout()
* client.uncork()
* client.unpipe()
* client.unref()
* client.unshift()
* client.wrap()
* client.write()
 
==================================================================
#                           on() method

client.on('close')
client.on('connect')
client.on('data')
client.on('drain')
client.on('end')
client.on('error')
client.on('lookup')
client.on('timeout')
