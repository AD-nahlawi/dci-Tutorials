let img = document.getElementById('myImg');
// let btn = document.getElementById('myBtn');


function changeImg(){
img.setAttribute('src','http://lorempixel.com/640/480/animals');
}

// btn.addEventListener('click',changeImg);


// let sum = prompt('please inter a number');


// let num1;
// let num2;

// if (num1 % 0){
// console.log('the number is zawgi')

// }else{
// console.log('the number is fardi');
// }

let button = document.querySelectorAll('button');
let p = document.querySelectorAll('p');

function courier(nodeName){
    nodeName[0].style.fontFamily = "'Courier New',Courier,monospace";
}
function gill(nodeName){
    nodeName[0].style.fontFamily = "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif";
}
function arial(nodeName){
    nodeName[0].style.fontFamily = "Arial, Helvetica, sans-serif";
}
function fantasy(nodeName){
    nodeName[0].style.fontFamily = "fantasy";
}
function bold(nodeName){
    nodeName[0].style.fontFamily = "bold";
}

button[0].addEventListener('click',function(){courier(p)});
button[1].addEventListener('click',function(){gill(p)});
button[2].addEventListener('click',function(){arial(p)});
button[3].addEventListener('click',function(){fantasy(p)});
button[4].addEventListener('click',function(){bold(p)});

button[0].addEventListener('mouseover',function(){button[0].style.fontFamily ="'Courier New',Courier,monospace"});
button[1].addEventListener('mouseover',function(){button[1].style.fontFamily ="'Gill Sans','Gill Sans MT',Calibri,'Trebuchet MS',sans-serif"});
button[2].addEventListener('mouseover',function(){button[2].style.fontFamily ="Arial, Helvetica,sans-serif"});
button[3].addEventListener('mouseover',function(){button[3].style.fontFamily ="fantasy"});
button[4].addEventListener('mouseover',function(){button[4].style.fontFamily ="bold"});