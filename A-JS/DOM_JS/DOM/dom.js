

// for (let l = 0; l <= 10; l++ ){
//     for(m = 0; m<= 9; m++ ){
//         document.write('*');
//     }
// document.write('<br>');
// } 
// let i = 0;
// while(i <= 10){
// document.write('<br>');
// i++;
// }



/* 
let isBlue = false;  

function changeColor(){

    if(isBlue==true){
        body.style.background='lightgray';
    }else{
        body.style.background='green';
    }

    isBlue   =!   isBlue;
}
setInterval(changeColor,3000); 

*/

// let body = document.querySelector('body');
// let a = document.querySelector('a');
// let h1 = document.querySelector('h1');

/* -------------------------------------------------------------*/
// tag[0].innerHTML='0';
// tag[1].innerHTML='1';
// tag[2].innerHTML='2';
// let tag = document.getElementsByClassName('light');
/* for(x=0; x<= 10; x++){

tag[x].id = 'firstid_' + x ;

} 
*/
/* -------------------------------------------------------------*/
// h1tag = document.getElementsByTagName('h1');

// h1tag[0].classList.add('border')
// h1tag[1].style.color='red';
// h1tag[2].style.color='red';
/* -------------------------------------------------------------*/

let liElement  = document.querySelectorAll('light');

/* -------------------------------------------------------------*/
let parag  = document.querySelectorAll('p');

    for( i = 0 ; i <= parag.length ; i++ ){

    parag[i].style.color='red';

    }

