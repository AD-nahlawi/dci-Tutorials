const fs = require('fs');
const path = require('path');

function deleteFile(fileName){

    fs.unlink(path.join( __dirname, '/testing_folder/' , fileName) ,function(err){
        if(err) throw err;
        console.log('the ' + fileName + ' was deleted')
    })
    
}


module.exports.deleteFile = deleteFile;