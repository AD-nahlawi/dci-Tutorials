const fs = require('fs');
const path = require('path');

function Update(data){
let [name,key,value] = data;
//let name = 'mark';
let filepath = path.join(__dirname,name,'info.json');
// let directory = path.dirname(__filename)+"/"+name; 
 

 data = fs.readFileSync(filepath);
let dataObject = JSON.parse(data)

// Add data to object like this [key] = 'value'
// dataObject["haircolor"] = "blond";
// dataObject["musicchoice"] = "jazz";

dataObject[key] = value

let content = JSON.stringify(dataObject);
console.log(dataObject);

// 'Update' file
// Basically: writing the content in the given directory. 
// So actually we are creating a new file but with changed content

fs.writeFile(filepath,content,(err)=>{
    if(err)
     {throw err;
}else {
    console.log('Updated file')
}
})
}

module.exports = Update;