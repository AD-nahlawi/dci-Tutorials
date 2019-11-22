const fs = require('fs')


async function fe() {
    fs.readFile('./index.html','utf8', (err, data)=>{
        if (err) throw err;
        console.log('first!')
        console.log(data)
        })
    console.log('secund!')
}

// fs.readFile('./index.html','utf8')
// .then((res)=>{ return res})
// .then((data)=>{
//     console.log('first')
//     console.log(data)

// })

// console.log('secund!')


