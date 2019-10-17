let br ='</br>';

let id = 0;

for( first=0; first<=10; first++ ){
    document.write("<span style='color:red;'>first loop "+'<span style="color:blue">'+first+'</span>'+' id = '+id+"</span>"+br);
/*                                             
 /\                                                                 \  / 
/  \                                                                 \/                                */
                
    for( secund=0; secund<=10; secund++ ){
        document.write("<span style='color:blue;'>secund loop "+'<span style="color:green">'+secund+'</span>'+' id = '+id+"</span>"+br);
/*                                             
     /\                                                                      \  /
    /  \                                                                      \/                        */

        for( third=0; third<=10; third++ ){
            document.write("<span style='color:green;'>third loop "+'<span style="color:red">'+third+'</span>'+' id = '+id+"</span>"+br);
            id++;
/*                                             
         /\                                                                     \  /
        /  \                                                                     \/
            ---------------------------------------------------------------------                        */
        } 
    }
}/* 
let x = 5;
console.log(a=++x)
 */
for(let i=0; i<20;i++ ){
console.log(i=i*i)
}
/* 
    for(let x=1; x<=9; x++ ){  
        for(let y=x; y<=9; y++ ){ 
            document.write(' '); 
        } 
    document.write('\n');
        for(let c=1; c<x; c++){
            document.write('X ');
        }
    document.write(br); 
    } */
//----------------------------------------------------------
/*     for(let a=1; a<=10; a++ ){
        for(let b=0; b<=(10-a); b++ ){
            document.write(b+' ');
        }
    document.write('\n');
        for(let c=1; c<a; c++){
            document.write('X ');
        }
    document.write('<br>');
    document.write (' ');
    }
//----------------------------------------------------------    
    document.write(br); */
//----------------------------------------------------------
    // for(let i=0; i<=9; i++ ){
    //     for(let j=0; j<=i; j++ ){
    //         document.write(j+' '); 
    //     }
    // document.write('\n');
    //     for( k=9; k>i; k--){
    //         document.write('X ');
    //     }
    // document.write(br); 
    // }
//----------------------------------------------------------
/*     document.write(br);
//----------------------------------------------------------
    for(let i=0; i<=9; i++ ){
        for(let j = 9 ; j >= i ; j -- ){
            document.write(j+' '); 
        }
    document.write('\n');
        for( let l = 0 ; l < i; l ++ ){
            document.write('X ');
        } 
    document.write(br); 
    } */
//-----------------------------------------------------------
/*     document.write(br);

for(loop = 1; loop <= 9; loop ++){

    for(loop2 = 1; loop2 < loop; loop2++){
        if (loop >= 5){
            for(let loopStra = 1;loopStra<loop2;loopStra++){
                document.write(loop);        
            }
        } 
        else{
            document.write('0');        
        }
}
document.write(br);
} */
//________________________________________________________________________________-
/* let i = 0;
while(i <= 20){
    console.log(i + "* 9=" + i * 9);
    i++;
}

 */

/* let j = 20;
while (j >= 0 ){

    console.log(j + " * 9 =" + j * 9);

    j--;

}  */
//________________________________________________________________________________-

//-----------------------------------------loooooops----------------------------------
       
/* 
let answer = prompt("do you like JS");

while (answer !== "yes"){
let answer = prompt("do you like JS");
answer++;
}

if (answer == "yes"){
    console.log ("thankYou");
}
var willcommen = alert("hallo");
var answer;
while (answer !== "yes"){

var answer = prompt("do you like JS");

// answer++;
if (answer == "yes" ){
    console.log ("thankYou");
}

}
 */


//________________________________________________________________________________-

/* let answer = prompt("do you like JS");

while(answer.indexOf('yes') == -1){
     answer = prompt("inside while: do you like JS");
}
alert('thank You');
 */
//________________________________________________________________________________-
// printing the numbers between 0 and 20
/* let whileloop =0;
while(whileloop <= 20 ){
if (whileloop == 5){
    
}

document.write(whileloop);
document.write(br);

whileloop++;

 } */
//________________________________________________________________________________-

/* whileloop =0;
while(whileloop <= 100 ){

// if (whileloop == 50){
//     break;
// }
if( whileloop * 9 > 180 ){
    // break;
    console.log (whileloop); 

}else{
    console.log (whileloop ); 
}
console.log(whileloop * 9);


whileloop++;
}
 */
//________________________________________________________________________________-

// printing the numbers between 0 and 30 and escape the number 10
/* 
let j = 0;

while(j <= 30){
 j++;
    if (j == 10){
        continue;
    }

console.log(j);
   
}
 */
//________________________________________________________________________________-

/*     for(let i = 0; i <= 6; i++){
        console.log(whichDayIsIt(i));
    }

//________________________________________________________________________________-

    let i= 0;
    while (i<=6){
        console.log(whichDayIsIt(i));
    i++
    }
 */
/* //________________________________________________________________________________-

for(loop = 1; loop <= 9; loop ++){

    for(loop2 = 1; loop2 < loop; loop2++){
        if (loop >= 5){
            for(let loopStra = 1;loopStra<loop2;loopStra++){
                document.write(loop);        
            }
        } 
        else{
            document.write('0');        
        }
}
document.write(br);
}
 */
//________________________________________________________________________________-

//another Example about while but in reverse starting up 20 to down:
/* 
let j = 20;
while (j >= 0 ){

    console.log(j + " * 9 =" + j * 9);

    j--;

} 
 */
// do while loop

/* let t=0;
let k="";

do{
k= "the counter=" + t;
console.log(k);
t++;
}

while(t < 10);
    let lineBreack = '<br>';

    let welcomeVar = 'welcome to this side!\n inter your password';
    let passwordVar = 123456789;
    let inputVar = prompt(welcomeVar);

    if (inputVar == passwordVar){
        document.write('<h1>the password is currect!</h1>' + passwordVar.length);
    }
    else {
        document.write('<h1>the password is incurrect! out</h1>');
    }
   */
    //________________________________________________________________________________-

/* let myInput = prompt('Please input string');
for (let i = 0; i < 10; i++){

    if (myInput.length < 8){
    let myInput = prompt('your pass is week try again!');
    }

    else if(myInput.length < 12){
     myInput = prompt('its alreday stronger but not enough');

    }
    else{
            alert("changed");
    }
}
 */
//________________________________________________________________________________-


//________________________________________________________________________________-
/* let answer = prompt("do you like JS");

while (answer !== "yes"){
let answer = prompt("do you like JS");
answer++;
}

if (answer == "yes"){
    console.log ("thankYou");
}
 */
//________________________________________________________________________________-

/* 
let answer = prompt("do you like JS");

while(answer.indexOf('yes') == -1){
     answer = prompt("inside while: do you like JS");
}
alert('thank You');

//we printing the numbers between 0 and 20
/* let whileloop =0;
while(whileloop <= 20 ){
if (whileloop == 5){
    
}

document.write(whileloop);
document.write(br);

whileloop++;

} */
//------------------------------------
//________________________________________________________________________________-
/* 
whileloop =0;
while(whileloop <= 100 ){
 */
// if (whileloop == 50){
//     break;
// }
/* if( whileloop * 9 > 180 ){
    // break;
    console.log (whileloop); 

}else{
    console.log (whileloop ); 
}
console.log(whileloop * 9);


whileloop++;
}
/* 
let j = 0;

while(j <= 30){
 j++;
    if (j == 10){
        continue;
    }

console.log(j);
   
}
 */
//________________________________________________________________________________-

/* let counter = -1;
    while(counter < drinkList.length -1){
    counter ++;

        if (drinkList[counter] == delFormArr ){
            continue;
        }

    document.write(drinkList[counter]+br);


    }   
    document.write(br); */
//________________________________________________________________________________-

/* 
    let myInput = prompt('Please input string');
for (let i = 0; i < 10; i++){

    if (myInput.length < 8){
    let myInput = prompt('your pass is week try again!');
    }

    else if(myInput.length < 12){
     myInput = prompt('its alreday stronger but not enough');

    }
    else{
            alert("changed");
    }

} */


//________________________________________________________________________________-
/* 

for(b=1;b<=10;b++){

  for(a=1; a<=10;a++){

    if(a==1){
      document.write('*');
    }

    document.write('&nbsp ');

    if(a==10){
      document.write('*');
    }

  }

document.write('<br>')

}
 */
//--------------------------------------------------------------------
// for(z=1; z <= 10; z++){

// document.write(' * ');
// }
// //--------------------------------------------------------------------
// document.write('<br>');
// //--------------------------------------------------------------------

// for(x = 0; x  <= 10; x++){

//       document.write('*');
// //--------------------------------------------------------------------
//       for(y = 0; y <= 10; y++){
//       document.write('&nbsp ');

//       }
// //--------------------------------------------------------------------
//       document.write('*');
//       document.write('<br>');

// }
// //--------------------------------------------------------------------
// for(z=1; z <= 10; z++){

// document.write('* ');

// }
//--------------------------------------------------------------------
/* 
Output is :

* * * * * * * * * * * *
*                     *
*                     *
*                     *
*                     *
*                     *
*                     *
*                     *
*                     *
*                     *
*                     *
*                     *
* * * * * * * * * * * *

*/


