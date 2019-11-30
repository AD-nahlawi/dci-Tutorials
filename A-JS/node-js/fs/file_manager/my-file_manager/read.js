const fs = require('fs');
const path = require('path')


function readFile( fileName ){

    fs.readFile(path.join( __dirname,'/testing_folder/',fileName) ,'utf8', function(err,data){
        if(err) throw err;
        JSON.parse(data)
        console.log(data);
    })

}

module.exports.readFile = readFile;