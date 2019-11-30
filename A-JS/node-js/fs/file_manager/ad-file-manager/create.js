const fs= require('fs');
const path=require('path');




function createNewFile( data ){
    
    const dirname = path.dirname(__filename);
    let [directory, size] = data
    let info = {
        directory: directory,
        size: size
    }

    fs.mkdir(path.join(dirname, info.directory), ()=>{})

    let content = JSON.stringify(info);

    fs.writeFile(path.join( dirname, info.directory, 'info.json'), content, (err)=>{
        if(err){
            console.log(err)
        }else{
            console.log('File was created Successfully !!!')
        }
     })
}

module.exports=createNewFile;