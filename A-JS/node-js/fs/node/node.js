 const path = require('path')
 const fileSystem = require('fs')

// fileSystem.mkdir( path.join(__dirname, '/test/cv') , (err) => {
//     if(err){
//         console.log(err)
//     }else{
//         console.log('Folder Created ...')
//     }
// } )
// fileSystem.mkdir('/tmp/a/apple', { recursive: true }, (err) => {
//     if (err) throw err;
// });

// write a file
// fileSystem.writeFile(path.join( __dirname , '/test/cv' , 'hello.txt' ) , ' Hello ham\n ' , ( err ) => {
//         if ( err ) console.log( err );
// });

// append to the file
// fileSystem.appendFile(path.join( __dirname , '/test/cv' , 'hello.txt' ) , 'Hello ham' , ( err ) => {
//     if ( err ) console.log( err );
// });

// read from the file
fileSystem.readFile(path.join(__dirname,'/test/cv','hello.txt'), 'utf8', (err, data) => {
    if(err){
        console.log( err)
    }else{
        console.log (data)
    }
})