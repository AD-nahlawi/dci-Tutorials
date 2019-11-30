//   a6baf310d5a3e5933eccb65ff530c60c


const axios = require('axios')
let city = process.argv[2]
let country = process.argv[3]
let link = 'https://api.openweathermap.org/data/2.5/weather?q='+city+','+country+'&appid=a6baf310d5a3e5933eccb65ff530c60c';

axios.get(link)
.then((response)=>{

    console.log(response)

}).catch((err)=>{
    console.log(err)
})