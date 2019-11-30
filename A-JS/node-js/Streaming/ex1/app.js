// const fs = require('fs');



// const file = fs.createWriteStream('createWriteStream.txt');
// for( let i = 0 ; i <= 1 ; i++ ) {
//     file.write('start');
// }
// file.end('the');




// const readfile = fs.createReadStream( __dirname + '/createWriteStream.txt', {encoding:'utf8', highWaterMark: 64 * 1024 })
// readfile.on('data', function( chunk ) {
//      console.log( chunk.length )
// })




const fs = require('fs');

const read = fs.createReadStream( __dirname + '/lorem.txt', { encoding:'utf8', highWaterMark : 128 * 1024 } ) // 
const write = fs.createWriteStream( __dirname + '/loremcopy.txt' )

read.on('data', function(piece){
    console.log( piece.length + ' ...bytes' );
    write.write( piece )
})
read.on('data', function(){
    console.log('finish')
})




