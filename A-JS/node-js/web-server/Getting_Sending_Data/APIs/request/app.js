const request = require('request');



let link = 'https://jsonplaceholder.typicode.com/todos/1';

request(link, {json:true}, (err, res, data) => {
    if (err) throw err;

    console.log(res);
    console.log(data);
});