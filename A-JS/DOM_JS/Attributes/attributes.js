let link = document.querySelector('a');
// link.getAttribute('attr');
// link.setAttribute('href','www.ping.com');
// link.setAttribute('style','color:green');
link.setAttribute('href','https://www.facebook.com');


// /html-repo/C-images/Untitled.jpg
// /html-repo/C-images/quantum.jpeg
let img = document.querySelector('img');
function changeimg(){

    if (img.getAttribute('src') == '/html-repo/C-images/quantum.jpeg'){
        img.setAttribute('src','/html-repo/C-images/Untitled.jpg');
    }else{
        img.setAttribute('src','/html-repo/C-images/quantum.jpeg');

    }
}
// let imgSrc="";
// let imgSrc1='/html-repo/C-images/quantum.jpeg';
// let imgSrc2='/html-repo/C-images/quantum.jpeg';

// if(img.getAttribute('src') == imgSrc1){
//     imgSrc = imgSrc2

// }
// else { imgSrc = imgSrc2}