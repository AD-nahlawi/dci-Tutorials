// process.on('exit',function(code){
//     console.log('closed! ' + code)
// })

const command = process.argv[2]


if(command == 'fly'){

    console.log('flying');  

}else if (command =='drive'){

 console.log('driving');

}else if(command == 'play'){

console.log('playing');

}

// [fed-w@workstation node-js]$ node process.js  drive
// driving
// [fed-w@workstation node-js]$ 

