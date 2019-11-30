let create = require('./create');
let read =   require('./read');
let update = require('./update');
let remove = require('./delete');

switch( process.argv[2] ){

    case 'createFile':
    create.createFile( process.argv[3], process.argv[4] );
    break;

    case 'createDir':
    create.createDirectory( process.argv[3] );
    break;

    case 'readFile':
    read.readFile( process.argv[3] )
    break;

    case 'updateFile':
    update.updateFile( process.argv[3] )
    break;

    case 'deleteFile':
    remove.deleteFile( process.argv[3] )
    break;
}




let fetch = require('node-fetch')
fetch('https://jsonplaceholder.typicode.com/users/')
.then(jsondata => {return jsondata.json()})
.then(data => {
     for(let i = 0; i < data.length; i++){
        create.createFile(data[i].username + '.txt', JSON.stringify(data[i]));
     }
})



// let [ action , ...data ] = process.argv.slice(2)                                
// switch( action ){
    //     case 'createFile':
    
    //          create.createFile( data );
    //         break;
    
    //     case 'createDir':
    
    //         create.createDirectory( data );
    //         break;
    
    //     case 'readFile':
    
    //         read.readFile( data )
    //         break;
    
    //     case 'updateFile':
    
    //         update.updateFile( data )
    //         break;
    
    //     case 'deleteFile':
    
    //         remove.deleteFile( data )
    //         break;
    // }