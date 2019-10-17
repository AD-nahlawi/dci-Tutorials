//------------------------------------------------------



// function blockNone_Function(){
//     let h4 = document.getElementById('h4ID');
//     let button = document.querySelectorAll('button')[0];
//     let img = document.querySelector('img');

//     button[0].addEventListener('click', () => {
//         if(img.style.display == 'block'){
//             img.style.display = 'none';
//         }else{
//             img.style.display = 'block';
//         }
//     }); 
// }






//--------------------------------------------------------------







//--------------------------------------------------------------
document.querySelectorAll('button')[0].addEventListener('click',function(){
    addElementToTree_Function();
});

function addElementToTree_Function(){
    
    /* create a Child element */
    let div = document.createElement('div');
    /* add propersies to this Element */
    div.innerHTML ='new div';
    div.style.background = 'blue';
    div.style.border = '1px solid black';
    div.style.height = '20px';
    div.style.width = '100px';
    /* get the parent element to add the Child on it */
    mainDiv.appendChild(div);
}



document.querySelectorAll('button')[1].addEventListener('click',function(){
    
    mainDiv.removeChild(mainDiv.childNodes[0]);   
});



document.querySelectorAll('button')[0].addEventListener('click',function(){
    
    element1();
});

document.querySelectorAll('button')[1].addEventListener('click',function(){
    
    element2();
    
});

function element1 (){
    let h1 = document.createElement('h1');  //to create new h1 element
    let text = document.createTextNode('h1 inside div'); 
    h1.appendChild(text);
   mainDiv.appendChild(h1); // to add element to some element
}


function element2 (){
    let h1 = document.createElement('h1');  //to create new h1 element
    let text = document.createTextNode('h1 inside div'); 
    h1.appendChild(text);
    h1.style.color = 'green';
    ainDiv.appendChild(h1); // to add element to some element
}


let h1 =  document.querySelector('h1');
h1.addEventListener('click',function(){
    
    mainDiv.removeChild(mainDiv.childNodes[0]);  
     
})
let input = document.getElementById('main');
let output = document.getElementById('DivOutput');















//window.addEventListener('resize',() => {   //no Argument
// let w = window.innerWidth;
// let h = window.innerWidth;
//     h4.innerText = 'the width: '+ w +'the height: '+ h;
// })





let allColors = '012ABCDEF3456789';
function hexaRandom(){
    let color = "#"
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



/* 
    let w window.innerWidth
    let h window.innerHeight
-------------------------------------------------------------
    .keyCode()
    .alert()
    .log()
    .write()
-------------------------------------------------------------

    .length()
    .push()
    .pop()
    .shift()
    .unshift()
    .search()
    .indexOf()
    .lastIndexOf()
    .typeOf()
    .sort()
    .map()
    .charAt()
    .charCodeAt()
    .match()
-------------------------------------------------------------

    .search()
    .find()
    .filter()
    .findIndex()
    .reduce()
-------------------------------------------------------------

    .slice()
    .splice()
    .split()
    .trim()
  -------------------------------------------------------------

    .startsWith()
    .substr()
    .substring()
    .toString()
-------------------------------------------------------------

    .toLowerCase()
    .toUpperCase()
-------------------------------------------------------------

    .revers()
    .forEach()
    .match()
    .accessKey()
    setTimeout()
    setInterval()
-------------------------------------------------------------

    DOM
    .addEventListener()

    .getElementById()
    .getElementsByClassName()
    .getElementsByName()
    .getElementsByTagName()
    .getElementsByTagNameNS()
    var = window.getComputedStyle(myElement);
    var.getPropertyValue('stylePropertiy');
    .getRootNode()
    .getSelection()
    .getAnimations()
    .createElement()
    .appendChild()
    .createTextNode()
-------------------------------------------------------------
    .querySelector()
    .querySelectorAll()
    .queryCommandEnabled()
    .queryCommandIndeterm()
    .queryCommandState()
    .queryCommandSupported()
    .queryCommandValue()

    .getAnimations()
    .getAttribute()
    .getAttributeNS()
    .getAttributeNames()
    .getAttributeNode()
    .getAttributeNodeNS()
    .getBoundingClientRect()
    .getClientRects()
    .getRootNode()
    .msGetRegionContent()

    .setAttribute()
    .setAttributeNS
    .setAttributeNode() 
    .setAttributeNodeNS()
    .setPointerCapture()

    .cloneNode()
    .contains()
    .insertAdjacentElement()
    .insertAdjacentHTML()
    .insertAdjacentText()
    .insertBefore()

    .lookupNamespaceURI()
    .lookupPrefix()
    .matches()
    .normalize()
    .releasePointerCapture()

    .remove()
    .removeAttribute()
    .removeAttributeNS()
    .removeAttributeNode()
    .removeChild()
    .removeEventListener()

    .replaceChild()
    .replaceWith()
    .requestFullscreen()
    .requestPointerLock()
    .scroll()
    .scrollBy()
    .scrollIntoView()
    .scrollTo()

    .toggleAttribute()
    .webkitMatchesSelector()

    String.fromCharCode()   


    Math.PI
    Math.random() * x
    Math.floor(Math.random() * x.length
*/
