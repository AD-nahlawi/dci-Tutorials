let div = document.getElementById('A');
let button = document.querySelector('button');


div.addEventListener('click',function(){

    // butt.classList.add('btn');
    if(div.getAttribute('class') == 'standdardClass' ){
        div.classList.add('newClass');
    }
    else if (div.getAttribute('class') == 'standdardClass newClass'/* div.getAttribute('class') == 'newClass' || */ ){
        div.classList.add('newClass2')
    }
    else if(div.getAttribute('class')  == 'standdardClass newClass newClass2'){
        div.classList.add('newClass3') 