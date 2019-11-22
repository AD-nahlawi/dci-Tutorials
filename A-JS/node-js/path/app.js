
const pathFunctions = require('./pathFunctions');
const path = require('path');

console.log('app: Live Server');

pathFunctions.getConstants();

pathFunctions.getBaseName(__filename);
pathFunctions.getBaseName('/home/user/index.js'); // index.js

pathFunctions.getDirName(__filename);
pathFunctions.getDirName('/home/user/index.js'); // /home/user

pathFunctions.getExtName(__filename); // .js
pathFunctions.getExtName('/home/user/user.png'); //.png
pathFunctions.getExtName('/home/user/Readme.md'); //.md
pathFunctions.getExtName('/home/user/style.css'); //.css


 



let res;
res = path.join('/book_store','book_name1','book.pdf');
console.log('joined: ' + res);

res = path.join('/book_store','book_name2','book.pdf');
console.log('joined: ' + res);

res = path.join('/book_store','book_name3','book.pdf');
console.log('joined: ' + res);




res = path.parse('/book_store/book_name1/book.pdf');
// console.log(res);

//   root: '/',
//   dir: '/book_store/book_name1',
//   base: 'book.pdf',
//   ext: '.pdf',
//   name: 'book' 

// format
console.log('\n')

res = path.format({
    dir: '/store/book_new',
    name: 'newBook',
    ext:'.pdf'
})

console.log(res)