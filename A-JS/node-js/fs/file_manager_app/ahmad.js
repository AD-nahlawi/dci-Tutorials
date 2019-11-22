const fs = require('fs');
const path = require('path'); 
let directory = __dirname + '/NewFolder';
let filename = 'info.json'; let filepath = path.format({
    dir: directory,
    base: filename
})
//to add a new data in info.js which is inside the NewFolder we can either add a new key and new value,and if we want to update any key just put ist and the new Value instead
let NewJsonKey = 'address';
let value = "Hamburg";
let data = fs.readFileSync(filepath); 
let newInfo = JSON.parse(data);

newInfo[NewJsonKey] = value;

fs.writeFile(filepath, JSON.stringify(newInfo), (err) => {
    if (err) throw err
    console.log('The newInfo json file is updated ......')
})