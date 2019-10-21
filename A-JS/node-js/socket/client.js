const net = require('net');

var client = net.connect( { port : 50307 } , () => {
    console.log('connected ! ');
    client.write('hi! am  Client! ')


}).on('error', ( err ) => {
    throw err;
});


client.on('data' , ( data ) => {
    console.log(data.toString());
    client.end;
});


// client.on('close') // client.on('connect') // client.on('data') // client.on('drain') // client.on('end') // client.on('error') // client.on('lookup') // client.on('timeout')
client.on('end', () => {  
    console.log('Disconnected ! ');
    
})
