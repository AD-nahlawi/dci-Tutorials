const fs = require('fs');
const path = require('path')

let objectToAppend = {

    username:'after',
    name:'after'
}

function updateFile(fileName){

    // read file
    let data = fs.readFileSync(path.join(__dirname, '/testing_folder/', fileName))
        data = JSON.parse(data)


    console.log('====== data before editing ======== \n')
    console.log(data.name  + '\n')
    console.log(data.username  + '\n')


    data.name = objectToAppend.name
    data.username = objectToAppend.username

    
    console.log('====== data after editing ======== \n')
    console.log(data.name  + '\n')
    console.log(data.username  + '\n')

    // write file
    fs.writeFile(path.join(__dirname, '/testing_folder/', fileName), JSON.stringify(data), 'utf8', function(err){
        if(err) throw err;
    })



}




module.exports.updateFile = updateFile;