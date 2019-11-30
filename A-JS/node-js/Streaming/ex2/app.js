const fs = require( 'fs' );

let inputFile = fs.createReadStream( 'test.txt' );

let outputFile = fs.createWriteStream( 'output.txt' );

inputFile.pipe( outputFile );

