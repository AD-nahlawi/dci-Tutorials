const fs= require('fs');
const path=require('path');

function Delete(data){

    let [directory] = data;
    let foldername = directory;


    let file_path = path.join(path.dirname( __filename ), foldername, 'info.json');
    // its to delete a file only
    fs.unlinkSync( file_path );



    let folder_path = path.join(__dirname, foldername);
    // its to delete a folder only
    fs.rmdirSync( folder_path )
    console.log('The Folder and Json file are Deleted ...');
}

module.exports = Delete