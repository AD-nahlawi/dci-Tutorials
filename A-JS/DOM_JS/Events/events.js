// setInterval( chImg ,1000); // use some Fonction every secund
// setInterval( chImg() ,1000); // change the value every secund

/* let body = document.querySelector('body');
let arr = ['blue','brown','coral','cyan','gold'];
 */
/* let counter = 0;

function changeBg(){

    if (counter == arr.length){
        counter = 0;
    }


    if (counter < arr.length){
        body.style.background = arr[counter];
    }
    

    let button = document.getElementById('idButton');

    button.innerHTML = arr[counter]; 

        counter++

} */

/* function showValue(){
let text = document.getElementById('inputID');
    // console.log(text.value);
    if (text.value == '123456789'){
        alert('your password are stilled! thank you')
    }else{
        alert('try again!');
    }

}

 */


/* 


let counter_2 = 1;

function chImg() {

    let img = document.getElementById("logoImg");

    counter_2++;

    let newSrc = "https://picsum.photos/id/" + counter_2 + "/300/300";

    img.setAttribute("src", newSrc);

}


 */




// function chImg2() {

//     let img = document.getElementById("logoImg");

//     let firstImg = "https://picsum.photos/id/666/300/300";

//     let secondImg = "https://picsum.photos/id/656/300/300";



//     if (img.getAttribute("src") == firstImg) {
//         img.setAttribute("src", secondImg);
//     }

//     else {
//         img.setAttribute("src", firstImg);
//     }
// }

let input = document.querySelectorAll('input');



function onFocusFunction(){
    input[0].style.background='pink';

}
function onBlurFunction(){
    input[0].style.background='pink';

}

function onChangeFunction(){
    input[0].style.background='pink';


}
function onSelectFunction(){
    input[0].style.background='pink';


}
//-----------------onkey------------
function onKeyPressFunction(){
    input[0].style.background='pink';


}
function onKeyUpFunction(){
    input[0].style.background='pink';


}
function onKeyDownFunction(){
    input[0].style.background='pink';


}



function onSubmitFunction(){
    alert('you will redirected to page');
}




function changeElenmentFunction(elementName,classNumber){

    let savedElementValue = document.querySelectorAll(elementName);

    savedElementValue[ classNumber ].alert('you selected' + savedElementValue);

}





