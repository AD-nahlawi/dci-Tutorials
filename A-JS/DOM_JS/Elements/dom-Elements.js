// let myList = document.getElementById('list');

//console.log(myList.firstElementChild.innerHTML); // frist Element of the parent
//console.log(myList.lastElementChild.innerHTML);  // last Element of the parent

//console.log(myList.children[0].innerHTML);   // element as Array[0]
// console.log(myList.att);

let btn = document.getElementById('myBtn1');
let btn2 = document.getElementById('myBtn2');
let list = document.getElementById('list');
let paragraph = document.getElementById('content');
let imgAttrs = document.getElementById('imgID'); 


// //    paragraph.innerHTML = myList.children[1].innerHTML;
//     // paragraph.innerHTML = myList.childNodes  

// // paragraph.innerHTML += children[i].innerHTML + '\n';
// // paragraph.innerHTML += children[i].innerHTML + '<br>';

/* let counter = 0;
btn.addEventListener('click',function(){
if(counter == list.children.length ){counter = 0;}
paragraph.innerHTML += list.children[counter].innerHTML;
counter++;
});

btn2.addEventListener('click',function(){
    paragraph.innerHTML = '';
})
 */
// Attributes

/* paragraph.attributes[0].name // or value
paragraph.setAttribute[0].name // or value
paragraph.getAttribute[0].name //or value
 */


// for(i=0; i < list.children.length; i++){
//     list.children[i].setAttribute('myAttrName','myAttrValue');
//     console.log(list.children[i].attributes)
    
// }


btn2.addEventListener('click',function(){

    for(i=0; i < imgAttrs.attributes.length; i++){
        paragraph.innerHTML += imgAttrs.attributes[i].name + ' ---is---> ' + 
        imgAttrs.attributes[i].value +'<br>';
    }
    
});

