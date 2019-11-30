const fs = require('fs');
const path = require('path');

function Delete(data){
    let [ name ] =  data
    // let delFolder = 'peter';
    let delFolder = name;

    let delFile = 'info.json' 
    
    let filepath = path.join(__dirname, delFolder, delFile);
    let folderpath = path.join(__dirname, delFolder);
    
    
    if(fs.existsSync(filepath)) {
        console.log('The file exists');
        fs.unlinkSync(filepath);
        console.log(`Deleted any files in the ${ delFolder } folder`)
    } else {
        console.log('No File is to be deleted')
    }
    
    if(fs.existsSync(delFolder)){

        console.log('directory exists');
        fs.rmdirSync(folderpath);
        console.log('Deleted empty folders');
        
    } else {
        console.log('No folder to delete');
    }
}

module.exports = Delete;
