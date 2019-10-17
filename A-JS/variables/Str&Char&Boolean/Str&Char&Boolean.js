/*  charCodeAt(0) */ // https://stackoverflow.com/questions/94037/convert-character-to-ascii-code-in-javascript
// charAt(6)

/* let string = "Hello world";
console.log(string.length);
console.log(string[0]);
console.log(string.charAt(6));
console.log(string.charCodeAt(0))

 */

let stringindex = 'We Are Learning JavaScript';
console.log(stringindex);

//  console.log(stringindex.indexOf('JAVAscript'));
// console.log(stringindex.indexOf('php'))  /*  -1  */

console.log(stringindex.match('are learning')); 
console.log('-----------------------.search()----------------------------------');

console.log("string.search('we')  = "         +stringindex.search('we')); 
console.log("string.search('are') = "         +stringindex.search('are')); 
console.log("string.search =('learning') = "  +stringindex.search('learning')); 

console.log('-----------------------.slice()----------------------------------');

console.log('string.slice(0,4) =  ' +stringindex.slice(0,4)); 
console.log('string.slice(5,10) = ' +stringindex.slice(5,10)); 

console.log('-----------------------.slice()---color-------------------------------');
let color = ['red','blue','green','yello','black','white']

console.log('string.slice(0,4) = '  +color.slice(0,4)); 
console.log('string.slice(5,10) = ' +color.slice(1,3)); 
console.log('-----------------------.slice()---delete &r eplace-------------------------------');

console.log('-------------------------split()--------------------------------');

let strArray = 'hi*How*Are*You';
console.log(/* 'string.split('*') = '+ */strArray.split('*')); 
console.log(strArray);

console.log('---------------fruit.split("A")--------------------------');
let fruit = 'ApplE ArrE RounD AnD ApplE ArE JuicY';
console.log(fruit);
arrFruit = fruit.split('A');
console.log(arrFruit);
// console.log('string.split = '+stringindex.split()); 
// console.log('string.split = '+stringindex.split()); 

console.log('-------------------------startsWith("Apple"))--------------------------------');
console.log(fruit);
console.log(fruit.startsWith('Apple')) //true
console.log(fruit.startsWith('apple')) //false


console.log('------------------------substr(2,8)---------------------------------');
console.log(fruit);
console.log(fruit.substr(2,8))

console.log('------------------------substring(2,8)---------------------------------');
console.log(fruit);
console.log(fruit.substring(2,8))

console.log('------------------------toLowerCase()---------------------------------');
console.log(fruit);
console.log(fruit.toLowerCase())

console.log('------------------------toUpperCase()---------------------------------');
console.log(fruit);
console.log(fruit.toUpperCase())

console.log('------------------------trim()---------------------------------');
let food = '           Dönner       Apple Kebab       Banana';
console.log(food);
console.log(food.trim());

console.log('------------------------toString()---------------------------------');
// convert object to stringl
let colors =['red','blue','green','yelow'];
console.log(colors);
console.log(colors.toString());

console.log('------------------------parseInt()---------------------------------');
// convert object to string
let strToInt ='153768';
console.log('string = '+ strToInt);
console.log(strToInt = parseInt(strToInt)); /*  */

console.log('------------------------isInteger("")------------------------------');
console.log('------------------------parseInt()---------------------------------');

let text = 'Returns a number indicating the';

// console.log (text.charAt(8));
// console.log (text.charAt(10));
// console.log (text.charAt(17));
// console.log (text.charAt(28));

//  console.log(toUpperCase(8) /* == text.toLowerCase() */)

// let cars =['BMW','FORD','FIAT','MERCEDES','AUDI'];//        [ "BMW", "FORD", "FIAT" ]
// console.log(cars)


