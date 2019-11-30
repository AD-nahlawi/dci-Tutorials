const https = require('https');

    const optionres = {

        path: '/todos/1',
        method: 'GET',
        port: 443,
        hostname: 'jsonplaceholder.typicode.com',
    }
//  https.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY', ( response ) => {
    https.get(optionres, ( response ) => {

        let data = '';

        // resive a chunk of data
        response.on('data', (chunk) => {

            data += chunk;
            // console.log(chunk)
        });

        // the whole response has been received
        response.on('end', () => {

            console.log(JSON.parse(data));
        })
}).on('error',(err) => {
    console.log('error! something went wrong with response! ' + err.message);
}) 








const optionreq = {

    path: '/todos/2',
    method: 'GET',
    port: 443,
    hostname: 'jsonplaceholder.typicode.com',
}

const request = https.request(optionreq, (response) => {

    console.log('statusCode: ' + response.statusCode);
    response.on('data', (data)=>{
        console.log(JSON.parse(data))
    })
}).on('error',(err) => {

    console.log('error! something went wrong with request! ' + err.message);
}) 


request.end();