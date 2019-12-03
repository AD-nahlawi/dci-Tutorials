const net = require('net');

var client = net.connect( { port : 36059 } , () => {
    console.log('connected ! ');
    client.write('hi! am  Client! ');


}).on('error', ( err ) => {
    throw err;
});



client.on('data' , ( data ) => {
    console.log( data.toString() );
    client.end;
});




client.on('end', () => {  
    console.log('Disconnected ! ');
    
})