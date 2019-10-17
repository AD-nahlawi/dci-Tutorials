
// function makeCounter(){
//     var currentValue = 2;
//     return function(){
//         // return currentValue  = 2 * currentValue;
//         // return currentValue  = currentValue * currentValue;

//         return currentValue *= 2;

//     }
// }

//  var counter = makeCounter();
// console.log(counter());
// console.log(counter());


// var counter2 = makeCounter();
// console.log(counter2());
// console.log(counter());


/* 

function makeCounter(){

    function increment(){
       // return currentValue  = 2 * currentValue;
       // return currentValue  = currentValue * currentValue;
       return  increment.currentValue++;

   }

   increment.currentValue = 1;
   return increment;

}

var counter = makeCounter();
console.log(counter());

counter.currentValue = 5;

console.log(counter());

var counter2 = makeCounter();
console.log(counter2());
console.log(counter());


 */






//Here we make two counters: counter and counter2 using the same makeCounter function.

//Are they independent? What is the second counter going to show? 0,1 or 2,3 or something else?

/* function makeCounter() {
let count = 0;

    return function() {
        return count++;
    };

}

let counter = makeCounter();
let counter2 = makeCounter();

console.log( counter() ); // 0
console.log( counter() ); // 1


console.log( counter2() ); // ?
console.log( counter2() ); // ?


 */



// function Counter() {
//     let count = 0;
    
//     this.up = function() {
//         return ++count;
//     };
//     this.down = function() {
//         return --count;
//     };
//     }
    
//     let counter = new Counter();
    

//     console.log( counter.up() ); // 1
//     console.log( counter.up() ); // 2
//     console.log( counter.down() ); // 1



// function sum (a){

//     return  function(b){

//         return a + b;


//     }
// }

// console.log(sum(1)(2));
// console.log(sum(5)(-1))

/* function countDownRec(n){
    if(n >= 0){
        console.log(n);
        return countDownRec(n - 1);
    }
};

function countDown (n){
    while(n >= 0){
        console.log(n);
        n--;

    }
}; */



// function sumTo1(n){

//     if (n == 1) return 1;
//     return n + sumTo1(n - 1);

// }
// console.log(sumTo1(2));



// function sumTo2(n){

//     return n * (n + 1) / 2;

// }
// console.log(sumTo2(3));

/* 

function sumTo3(n){

    let sum = 0;
    for (let i = 1; i <= n; i++){
        sum += i;
    }
    return sum;

}
console.log(sumTo3(4));



let sum = 0;
function sumToRec(m){
    if(m > 0 ){
        sum += m;
        return sumToRec(m-1);
    }
    return sum;
}
console.log("Recursive " + sumToRec(10));


 */

 