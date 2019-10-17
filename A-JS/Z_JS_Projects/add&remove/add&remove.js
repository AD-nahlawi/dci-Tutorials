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
      //   console.log(color);
        return color;
} 


// let input = document.getElementById('');
// document.getElementById('').addEventListener('click',function(){
// document.getElementById('').innerHTML += input.value;
// input.value="";

// let div = document.createElement('div');

// let text = document.createTextNode(input.value); 
// div.style.height = '70px';
// div.style.width = '500px';
// div.style.border = '1px solid black';

// div.appendChild(text);
// document.getElementById('DivOutput').appendChild(div);

 // div.addEventListener('click',function(){
//    div.removeChild(div.childNodes[0])})



// });


//----------------------------------------------------------------------------------------------
let addBtn = document.getElementById('addButton').addEventListener('click',function(){
   let input = document.getElementById('input').value;
   createHtmlElements(input);
});
 
function createHtmlElements(createdElement){

/*  */ let childElement = document.createElement(createdElement);
   if (createdElement == 'div' || 
       createdElement == 'h1' || 
       createdElement == 'h2' ||
       createdElement == 'p' ||
       createdElement == 'span' ||
       createdElement == 'img' ||
       createdElement == 'a' ){


    childElement.style.background =/*  '#ffb142' */hexaRandom();
    childElement.style.height = '50px';
    childElement.style.width = '100%';
    childElement.style.textAlign = 'center';
    childElement.createdElement = '';
/*  */ let textNode = document.createTextNode('You added new ' + createdElement);
    childElement.appendChild(textNode);

let parentElement = document.getElementById('output');
    parentElement.appendChild(childElement);


let sellectCreatedElement = document.getElementsByTagName(  );


    for(i = 0 ; i < sellectCreatedElement.length; i++){

         sellectCreatedElement[i].addEventListener('click',function(){
               parentElement.removeChild(this);   
               // console.log(i);
         })

   }

      // childElement.addEventListener('click',function(){
      //    // childElement.style.background='red';
      //    // parentElement.removeChild(parentElement.childNodes[0]);
      //    // parentElement.removeChild(parentElement.childNodes[1]);
      //    // parentElement.removeChild(parentElement.childNodes[2]);
      //    let sellectThisElement = document.getElementsByTagName(createdElement);
      // })

}else{
   console.log('you have to Write html element')
}

}
//----------------------------------------------------------------------------------------------
// teskList[counter].addEventListener('click'function(){
//    this
// })


// let text =  document.getElementById('add');
// let button =  document.getElementById('addButton');
// let output =  document.getElementById('output');


// function addToDo(){
// let element = document.createElement('h4');
// element.innerHTML = text.value;

// document.getElementById('output').appendChild(element);
// // text.value = "";
// text.focus();
// let thisElement = document.getElementsByTagName('h4');


//       for (let i=0;i<thisElement.length;i++){
//             thisElement[i].addEventListener('click',function(){

//                output.removeChild(this);
//                // output.removeChild(el[i]); 
//                // output.removeChild(this.childNodes(el[i])); 
//             })
//       }

// }


function pressEnter(myEvent){
   if (myEvent.keyCode == 13){
      addToDo();
   }
}


// button.addEventListener('click', addToDo);

//text.addEventListener('keypress',pressEnter)


