let br = '<br>';


// let d = new Date;
// document.write(d + br);


// let d_mil1 = new Date(0);
// document.write(d_mil1 + br);


// let d_mil2 = new Date(100000000);
// document.write(d_mil2 + br);


// let d_mil3 = new Date(1562139052000);
// document.write(d_mil3 + br);


// let d_norm = new Date(2019, 0, 12 ,11, 30, 54);//Month statr from 0; 
/* let button = document.querySelectorAll('button');
let p = document.querySelectorAll('p');

 */

/* function germanyTime(){
let d = new Date();
let h = d.getHours();
let m = d.getMinutes();
let s = d.getSeconds();
let ms = d.getMilliseconds();
let time = h+':'+m+':'+s+':'+ms;
p[0].innerHTML=time;
}
 */
// function brasilTime(){
// let d = new Date();
// let h = d.getHours();
// let m = d.getMinutes();
// let s = d.getSeconds();
// let time = h+':'+m+':'+s;
// p[0].innerHTML=time;
// }

// function turkeyTime(){
// let d = new Date();
// let h = d.getHours();
// let m = d.getMinutes();
// let s = d.getSeconds();
// let time = h+':'+m+':'+s;
// p[0].innerHTML=time;
// }

// function syriaTime(){
// let d = new Date();
// let h = d.getHours();
// let m = d.getMinutes();
// let s = d.getSeconds();
// let time = h+':'+m+':'+s;
// p[0].innerHTML=time;
//} 
// let forhour = new Date();
// for(t = 0; t == forhour;t++){
//     document.write(t)

// }
  



//  button[0].addEventListener('click',function(){
//      setInterval(germanyTime,1);
//  });

// button[1].addEventListener('click',brasilTime);

// button[2].addEventListener('click',turkeyTime);

// button[3].addEventListener('click',syriaTime);

  
/* 
Math.ceil();
rounds a number up to its nearest integer:
---------------------------------------------------------------
Math.floor(4.7);    // returns 4
rounded down to its nearest integer:
---------------------------------------------------------------
 */

//---------------------------------------------------------------
// Math.abs(-4.7);     // returns 4.7 
// returns the absolute (positive) value 
//---------------------------------------------------------------





// pi = 3.14 
//  function ConvertDegToRadians(){  // ->  number * PI / 100 

// let number = document.getElementById('input').value;
// let output;

//        circleLenght = 2 * Math.PI * number ;
//        output = number * Math.PI / 180;



// document.getElementById('output').innerHTML = circleLenght;
// document.getElementById('output').innerHTML = output;

//  }


//  let div = document.getElementById('myDiv');


/* 
<style>
    p{color: rgb(158, 36, 148)}
</style>
 */
// r=Math.floor(Math.random()*255);
// r=Math.floor(Math.random()*255);
// r=Math.floor(Math.random()*255);

// let numberABCD = '123';
// let random = '';
// for(c=0;c<numberABCD.length;c++){

//     random+= numberABCD[ Math.floor(Math.random() * numberABCD.length) ]/* .toUpperCase() */;
//     String.fromCharCode()
//     if (numberABCD){

//     }
// }
// let ppp = '213 ';

// for(let i=0;i<30;i++){

//     if (random == ppp){
//     console.log('the password is'+ ppp)
// }else{
//     console.log('not' )
// }
//     // console.log( random );
// }

let allColors = '0123456789ABCDEF';
function hexaRandom(){
color = "#"
for (i = 0; i < 6; i++){

    // let index = Math.floor(Math.random() * allColors.length);
    let random16 = Math.floor(Math.random() * 16);
    color += allColors[random16];

    // color += allColors[index];
    //console.log(color);      
    }
    console.log(color);
    return color;
} 

let div = document.getElementById('myDiv');
// let start = new Date().getTime();
function startAgain_Function(){
    setTimeout(makeElementAppear_Function, Math.random() * 500);
} 
div.addEventListener('click',function(){  // 1
    div.style.display = 'none';    // 2
    // let timeEnd = new Date().getTime(); // 3
    // let timeTaken = (timeEnd - timeStart) / 1000 ;
    // let mySpan = document.getElementById('mySpan').innerHTML +=timeTaken+' | ';
    startAgain_Function();
});
function makeElementAppear_Function(){
    // timeStart = new Date().getTime();  // 4
    document.getElementById('myDiv').style.display = 'block';
    let top = Math.random() * 400 + 50;
    let left = Math.random() * 400 + 50; 
    document.getElementById('myDiv').style.top = top +'px';
    document.getElementById('myDiv').style.left = left +'px';
     document.getElementById('myDiv').style.background = hexaRandom();
        if(Math.random() > 0.4){
            document.getElementById('myDiv').style.borderRadius ='50%';
        }else{
            document.getElementById('myDiv').style.borderRadius ='0';
        }
}
// startAgain_Function();
let a = 15%5;
document.write(a)