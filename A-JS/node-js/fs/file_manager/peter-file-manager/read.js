const fs = require('fs');
const path = require('path');

function Read(data){
    let [name] =  data
    // let name = 'mark';
    
  let filepath = path.join(__dirname,name,'info.json')
    console.log(filepath);
    
    fs.readFile(filepath,(err,data)=> {
        if(err)
         {throw err;
    }else {
        console.log(JSON.parse(data));
    }
    })
}

module.exports = Read;