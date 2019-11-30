const fs= require('fs');
const path=require('path');

function Read(data){
    let [ name ] = data;
    let directory = __dirname + "/" + name;
    let filename = 'info.json';

    let filepath = path.format({
        dir  : directory,
        base :filename
    })

    fs.readFile(filepath, (err, data) => {
        if(err){
            console.log(err)
        }else{
            console.log(JSON.parse(data));
        }
    })
}

module.exports = Read;


