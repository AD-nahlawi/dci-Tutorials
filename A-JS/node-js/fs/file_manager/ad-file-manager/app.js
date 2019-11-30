const Create = require('./create');
const Read = require('./read');
const Update = require('./update');
const Delete = require('./delete');

//this variable is a feature in Node.Js the action means to take action like update,delete and so on, the three points data (...data) is to take the data from the consts (our copmonents JS files).
//then we have the splice: for example :
//we got this:  node update.js delete 
let [action, ...data] = process.argv.splice(2);
switch(action){
    case "create":
        Create(data);
        break;
    case "read":
        Read(data);
        break;
    case "update":
        Update(data);
        break;
    case "delete":
        Delete(data);
        break;
    default:
        console.log("Please make sure your action is correct !!!")
}