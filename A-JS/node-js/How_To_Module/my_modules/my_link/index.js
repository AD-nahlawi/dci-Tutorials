//  const print = require('myprocess')

// print(process.argv[2], process.argv[3])

// let myArray = process.argv.slice(2);
// let stars = myArray[0];
// let header = myArray[1];
// print(stars, header)

// let myArray = process.argv.slice(2);


// let x = Number(num1) + Number(num2);


// let num1 = myArray[0];
// let num2 = myArray[1];
// let num3 = myArray[2];

// let addingArrray = [Number(num1), Number(num2), Number(num3)]
// //let addingArrray = [num1, num2, num3, num4]



// let emptyArray = [];

// addingArrray.forEach((item)=>{
// //    console.log(item) 
// })


let operation = process.argv[2];
let numbers = process.argv.slice(3);

let sum = 0;
function sumFunction(num) {

    for(let i = 0; i < num.length; i++){
        sum += parseInt(num[i])
    } 
    // console.log(sum)
    return num
}

function avg(num) {

    return sumFunction(num) / num.length;

}




switch(operation){
    case "sum" :
        console.log(sumFunction(numbers))
    break; 

    case "avg" :
        console.log(avg(numbers))
    break;
}
// console.log(numbers)
