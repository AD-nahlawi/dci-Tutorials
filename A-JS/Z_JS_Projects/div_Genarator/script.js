let mainDiv = document.getElementById('mainDiv');
let input = document.getElementById('input');
let submit = document.getElementById('submit');
let texts = [
'JavaScript, The language for programming web pages',
'This HTML tutorial contains hundreds of HTML examples.',
'With our online HTML editor, you can edit the HTML, and click on a button to view the result.',
'At the end of this HTML tutorial, you will find more than 200 examples.',
'With our online editor, you can edit and test each example yourself.',
'This HTML tutorial also contains nearly 100 HTML exercises.',
'Test your HTML skills with our HTML Quiz!'
];

function arrayRandom(arr){
    return arr = Math.floor(Math.random() * arr.length);
};

function hexRandom(){
    let allColors = '012ABCDEF3456789';
    let color = "#";
    for (i = 0; i < 6; i++){
        let x = Math.floor(Math.random() * allColors.length);
        color +=  allColors[x];
    };
        return color;
}
submit.addEventListener('click', function(){
    for(let i = 0; i < input.value; i++){
        let newDiv = document.createElement('div');
            newDiv.style.width  = 150 +'px';
            newDiv.style.height = 150 +'px';
            newDiv.style.border = 1 +'px solid black';
            newDiv.style.background = hexRandom();
            let textDiv = document.createTextNode('name: '+texts[arrayRandom(texts)])

            newDiv.className = 'center';
            newDiv.style.cssFloat = 'left';
            mainDiv.appendChild(newDiv);
        let XButton = document.createElement('button');
            XButton.innerHTML = 'X';
            XButton.className = 'btn btn-danger';
            // XButton.style.cssFloat = 'right';
            newDiv.appendChild(XButton);
            newDiv.appendChild(textDiv);

            XButton.addEventListener('click',function(){
                newDiv.remove();
            });
    };
});

