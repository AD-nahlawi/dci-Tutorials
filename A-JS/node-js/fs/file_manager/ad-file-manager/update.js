const fs= require('fs');
const path=require('path');





function Update(Idata){

    let [ name, key, value] = Idata;
    // we are defining the place that we wana make an update on it 
    let directory = __dirname + "/" + name;
    let filename = 'info.json';


    // we are combining the Directory(NewFolder) with the (Json) file in one variable
    let filepath = path.format({
        dir  : directory,
        base : filename
    })


    //to add a new data in info.js which is inside the NewFolder we can either add a new key and new value to add them,or  update any any older key just put it and the new Value instead of the old ....
    let NewJsonKey = key;
    let NewValue   = value;


    let data = fs.readFileSync(filepath);

    let newInfo = JSON.parse(data);

    // here we combined the NewJsonKey and the Value ,preparing to push them to the info.json 
    newInfo[ NewJsonKey ] = NewValue;



    fs.writeFile(filepath, JSON.stringify(newInfo), (err)=>{
        if(err) throw err;
        console.log('The newInfo Json file is updated ......')
    })

}

module.exports = Update;



