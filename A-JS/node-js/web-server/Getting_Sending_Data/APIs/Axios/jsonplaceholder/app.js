// axios is for promisses!

const axios = require('axios')

let link = 'https://jsonplaceholder.typicode.com/todos/2';

axios.get(link)
.then((response)=>{
    console.log('json data with axios')
    console.log(JSON.parse(response))
}).catch((err)=>{
    console.log(err)
})