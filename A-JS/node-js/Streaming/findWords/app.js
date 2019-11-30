const fs = require('fs');
const path = require('path');


const [ word = 'localhost', file = 'data.txt'] = process.argv.slice(2)
if(!fs.existsSync(file)){
    file = 'data.txt';
}

// let file = process.argv[3]
// let word = process.argv[2]


// let readable = fs.createReadStream( path.join( __dirname, '/', file), {encoding:'utf8', /* highWaterMark: 128 * 1024 */})
let readable = fs.createReadStream(file, {encoding:'utf8',  highWaterMark: 128 * 1024 })

let counter = 0;
    readable.on('data', ( chunk )=>{

        if( chunk.includes( word ) ){
            counter++
            console.log('Reading chunk ' + counter)

        }

    }) 
  

process.on('exit', () => {
 console.log('\nEnd of data\n')
 console.log('Number of chunks ' + counter + '\n')
 console.log(`Found Word '${word}' in Each chunk of the Text ${counter} times\n\n\n`)
})

