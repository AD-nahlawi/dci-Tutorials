const fs = require('fs')
const path = require('path')




function createFile( fileName, fileContent ){

    // if(!fs.existsSync(path.join( __dirname, '/testing_folder/',fileName ))){

    fs.writeFile( path.join( __dirname, '/testing_folder/',fileName ), fileContent, { overwrite: false } ,function( err ){
        if ( err ) throw err;
        console.log('file created successfully!');

    })
    // }else console.log('the file is exist')
}

function createDirectory( folderName ){

   if( !fs.existsSync(path.join( __dirname , '/testing_folder/', folderName ))){

        fs.mkdir( path.join( __dirname , '/testing_folder/', folderName ), function( err ){
        if (err) throw err;
        console.log('folder created successfully!')
    })
   } else console.log('the folder is exist')
   
}

module.exports.createFile = createFile;
module.exports.createDirectory = createDirectory;