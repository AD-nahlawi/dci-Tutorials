/* 
var constructor_function = new Function("a", "b", "return a * b");
var x = constructor_function(4, 3); 
*/


/* (function () {
    var x = "this is self Invoking function!!";  // I will invoke myself
})();
*/

/*
function function_as_Value(a, b) {
    return a * b;
}
var x = function_as_Value(4, 3); 
 */

// async function postData(url = '', data = {}) {

// }

/* 
Hoisting_function(5);
function Hoisting_function(y) {
  return y * y;
} 
*/


/*
function callBackFunction(callBackParameter){
    callBackParameter();
}
function saiHi(){
    alert('massage');
}
callBackFunction(saiHi);

*/


/* 
function doSome(subject,callback){
    alert(subject);
    callback();
}
doSome('math',function(){
alert('callBack');
});
*/


/* 
function serverRequest(query,callback){
    setTimeout(function(){
        var response = query + '20 is available';
        callback(response);
    },5000);
}
function getResult(result){
    console.log('the Response from server: ' + result);
}
serverRequest('available cars in HH ', getResult);
*/


/* 
let noArgumentFunction = (para1, para2) => {  // NO Arguments
    return para1 * para2;
}
 */

/* const x = (x, y) => x * y;  */ // Arrow Functions         

/* //-------------------just One Argument------------------------------?
let returnMe = name => name;  

let argumentFunction = name => {  // One Argument
    return name;
}
 */



/* 
function change_img(){

    if (img.getAttribute('src') == '/html-repo/C-images/quantum.jpeg'){
        img.setAttribute('src','/html-repo/C-images/Untitled.jpg');
    }else{
        img.setAttribute('src','/html-repo/C-images/quantum.jpeg');

    }
}
 */


 /*
<form action="" method="" id="formInputID">
    <input type="text" name="firstNameInput"><br>
    <input type="text" name="lastNameInput"><br>
</form>
   <button onclick="clickFunction()">clickHere!</button><br><br><br><br><br>
   <p id="buttonClick" ></p>
 */

//----------------------------------Search in Arrays Problem: ------------------
/* 
let newCarss = ["bmw","ford","ferari"];

function findYourCar1(car){
    for(i =0; i < newCarss.length ;i++){
            if(newCarss[i] == car){
                console.log("Your car is found!");
            }
            else{
                console.log("Your car is not found!");
            }
        }

    }
    let newCars = ["bmw","ford","ferari"]; */
//----------------------------------Search in Arrays Soulution: ---------------------
/* 
    function findYourCar(car){
        let found = false;
        // let carVar;
        for(i = 0; i < newCars.length; i++){
            if(newCars[i] == car){
                found = true;
            }
        }

        if (found){
            console.log("Your car is found!");
        }
        else{
            console.log("Your car is not found!");
        }
    }  */
//----------------------------------- check passwords ----------------------------------
 
/* 
function argumentsFunc (num1, num2){
    console.log(arguments[0])
    console.log(arguments.length);
}
argumentsFunc()
 */



/*
 function getMax(){
for(let i = 0; i < arguments.length; i++){  
          
    if(arguments[i] > arguments[i]){
            console.log(arguments[i]);
        }else{
               console.log(arguments[i]);
        }
    
    }
}
 */

/*
 function checkArguments(){
    let max = 0;
        for(let i = 0; i < arguments.length; i++){
            if(arguments[i] > max){
                max = arguments[i];
            }
        console.log('i= '+i+'; argument=['+arguments[i]+']; '+'max= '+max);
        }
    console.log(max);
}
checkArguments(5,9,20,60,30,66);
 */

/* 
function checkArgumentsReturned(){
    let max = 0;
        for(let i = 0; i < arguments.length; i++){
            if(arguments[i] > max){
                max = arguments[i];
                console.log('the max number is ' + max)
            }
        console.log('i = '+i+'; argument = ['+arguments[i]+']; '+'max= '+max);
        }

    console.log('the last parameter of the function is = ' + max);
    return 'the returned Value is = ' + max;
}
checkArgumentsReturned(10,11,22,33,44,55,77);

let myre = checkArgumentsReturned();
console.log(myre);

 */

