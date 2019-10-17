let body = document.body;
let head = document.head;

//---------------------------------------HEAD-------------------------------------
let title = document.createElement('title');
    title.textContent = 'Nodes Manager';
    head.appendChild(title);
let meta1 = document.createElement('meta');
    meta1.setAttribute('charset','utf-8');
    head.appendChild(meta1);
let meta2 = document.createElement('meta');
    meta2.setAttribute('name','viewport');
    meta2.setAttribute('content','width=device-width, initial-scale=1, shrink-to-fit=no');
    head.appendChild(meta2);
let bootstrap_link = document.createElement('link');
    bootstrap_link.setAttribute('rel','stylesheet');
    bootstrap_link.setAttribute('href','https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css');
    bootstrap_link.setAttribute('integrity','sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T');
    bootstrap_link.setAttribute('crossorigin','anonymous');
    head.appendChild(bootstrap_link);
let google_Font_link = document.createElement('link');
    google_Font_link.setAttribute('href','https://fonts.googleapis.com/css?family=Anton&display=swap');
    google_Font_link.setAttribute('rel','stylesheet');
    head.appendChild(google_Font_link);
// let style = document.createElement('style');
//     style.textContent = '*{box-sizing: border-box;}';
//     head.appendChild(style);

//---------------------------------------BODY-------------------------------------


// let jquery_script = document.createElement('script');
//     jquery_script.setAttribute('src','https://code.jquery.com/jquery-3.3.1.slim.min.js')    
//     jquery_script.setAttribute('integrity','sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo');
//     jquery_script.setAttribute('crossorigin','anonymous');
// let ajax_script = document.createElement('script');
//     ajax_script.setAttribute('src','https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js')    
//     ajax_script.setAttribute('integrity','sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1');
//     ajax_script.setAttribute('crossorigin','anonymous');
// let bootstrap_script = document.createElement('script');
//     bootstrap_script.setAttribute('src','https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js')    
//     bootstrap_script.setAttribute('integrity','sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM');
//     bootstrap_script.setAttribute('crossorigin','anonymous');
// let my_script = document.createElement('script');
//     my_script.setAttribute('src','arrays.js');

body.setAttribute('class','bg-light ');

// ---------------------------------------------------------created Buttons 

let generatorButton = document.createElement('button');
let textEdButton = document.createElement('button');
let styleEdButton = document.createElement('button');
let reloadButton = document.createElement('button');
//------------------------------------------------------------generatorButton

body.appendChild(generatorButton);
generatorButton.innerHTML = 'Generate';
generatorButton.style.width = 120 + 'px';
generatorButton.style.position = 'relative';
generatorButton.style.display = 'block';
generatorButton.style.top = 1 + 'px';
generatorButton.style.left = 5 + 'px';
generatorButton.setAttribute('class','btn btn-outline-dark ');

//------------------------------------------------------------reloadButton
body.appendChild(reloadButton);
reloadButton.innerHTML = 'Reload';
reloadButton.style.width = 120 + 'px';
reloadButton.style.position = 'relative';
reloadButton.style.cssFloat = 'right';
reloadButton.style.top = -36 + 'px';
reloadButton.style.right = 5 + 'px';
reloadButton.setAttribute('class','btn btn-outline-dark ');

//------------------------------------------------------------mainDiv
let mainDiv = document.createElement('div');
document.body.appendChild(mainDiv);
mainDiv.style.width = 67 + '%';
mainDiv.style.height = 560 + 'px';
mainDiv.setAttribute('class','border border-info ');
mainDiv.style.marginLeft = '13px'
mainDiv.style.position = 'relative';
mainDiv.style.left = -9 + 'px';
mainDiv.style.top = 5 + 'px';
mainDiv.style.overflow = 'hidden';
mainDiv.style.cssFloat = 'right';

//------------------------------------------------------------generateDivs
let generateForms = document.createElement('div');
document.body.appendChild(generateForms);
generateForms.style.textAlign = 'center';
generateForms.style.width = 340 + 'px';
generateForms.style.height = 280 + 'px';
generateForms.setAttribute('class','border border-info ');
generateForms.style.position = 'relative';
generateForms.style.top = 5 + 'px';
generateForms.style.left = 5 + 'px';
generateForms.style.overflow = 'hidden';

let infoForm = document.createElement('div');
document.body.appendChild(infoForm);
infoForm.style.textAlign = 'center';
infoForm.style.width = 340 + 'px';
infoForm.style.height = 280 + 'px';
infoForm.setAttribute('class','border border-info ');
infoForm.style.position = 'relative';
infoForm.style.top = 5 + 'px';
infoForm.style.left = 5 + 'px';
infoForm.style.overflow = 'hidden';

//------------------------------------------------------------editForm
let editForm = document.createElement('div');
document.body.appendChild(editForm);
editForm.innerHTML = 'edit';
editForm.style.textAlign = 'center';
editForm.style.width = 120 + 'px';
editForm.style.height = 210 + 'px';
editForm.setAttribute('class','border border-info ');
editForm.style.position = 'absolute';
editForm.style.right = 5 +'px';
editForm.style.top =  393 +'px';
editForm.style.overflow = 'hidden';

//------------------------------------------------------------optionsForm
let optionsForm = document.createElement('div');
document.body.appendChild(optionsForm);
// optionsForm.innerHTML = 'options';
optionsForm.style.textAlign = 'center';
optionsForm.style.width = 120 + 'px';
optionsForm.style.height = 350 + 'px';
optionsForm.setAttribute('class','border border-info ');
optionsForm.style.position = 'absolute';
optionsForm.style.right = 5 +'px';
optionsForm.style.top = 42 +'px';
optionsForm.style.overflow = 'hidden';

//--------------------------------------------------------------setForm
let setForm = document.createElement('div');
document.body.appendChild(setForm);
setForm.style.width = 82.5 + '%';
setForm.style.height = 40 + 'px';
setForm.setAttribute('class','border border-info ');
setForm.style.position = 'absolute';
setForm.style.left = 128 +'px';
setForm.style.top =  1 +'px';
setForm.style.overflow = 'hidden';

// -----------------------------Colors Functions----------------------------
let allColors = '012ABCDEF3456789';
function hexaRandom(){
    let color = "#";
    for (i = 0; i < 6; i++){
        let random16 = Math.floor(Math.random() * 16);
        color += allColors[random16];
        };
        return color;
}

// -----------------------------leftButton----------------------------
let leftButtonCounter = 0;
function leftButton(parentNode,thisElement){
    let leftButton = document.createElement('button');
    parentNode.appendChild(leftButton);
    leftButton.innerHTML = 'L';
    leftButton.style.width = 55 + 'px';
    leftButton.setAttribute('class','btn btn-outline-dark ');
    leftButton.addEventListener('click',function(){
        leftButtonCounter -= 20;
        thisElement.style.left = leftButtonCounter + 'px';
        leftButtonCounter++ ;
    });
};

//----------------------------rightButton--------------------------------
let rightButtonCounter = 0;
function rightButton(parentNode,thisElement){
    let rightButton = document.createElement('button');
    parentNode.appendChild(rightButton);
    rightButton.innerHTML = 'R';
    rightButton.style.width = 55 + 'px';
    rightButton.setAttribute('class','btn btn-outline-dark ');
    rightButton.addEventListener('click',function(){

        rightButtonCounter += 20;
        thisElement.style.left = rightButtonCounter + 'px';
        rightButtonCounter++;
    });
};

//------------------------------topButton-------------------------------
let topButtonCounter = 0;
function topButton(parentNode,thisElement){
    let topButton = document.createElement('button');
    parentNode.appendChild(topButton);
    topButton.innerHTML = 'T';
    topButton.style.width = 55 + 'px';
    topButton.style.cssFloat = 'left';
    topButton.style.marginLeft = '4px';
    topButton.setAttribute('class','btn btn-outline-dark ');
    topButton.addEventListener('click',function(){
         topButtonCounter -= 20;
         thisElement.style.top = topButtonCounter + 'px';
         topButtonCounter++;
    });
};

//-------------------------------bottomButton------------------------------
let bottomButtonCounter = 0;
function bottomButton(parentNode,thisElement){
    let bottomButton = document.createElement('button');
    parentNode.appendChild(bottomButton);
    bottomButton.innerHTML = 'B';
    bottomButton.style.width = 55 + 'px';
    bottomButton.setAttribute('class','btn btn-outline-dark ');


    bottomButton.addEventListener('click',function(){

        bottomButtonCounter += 20;
        thisElement.style.top = bottomButtonCounter + 'px';
        bottomButtonCounter++;


    });
};

//---------------------------------setting generatorButton----------------------------
generatorButton.addEventListener('click',function(){
    
    let creatingElementIn = document.createElement('input');
    generateForms.appendChild(creatingElementIn);
    creatingElementIn.style.position = 'relative';
    creatingElementIn.style.width = 100 + '%';
    creatingElementIn.setAttribute('class','form-control ');
    creatingElementIn.setAttribute('placeholder','myElement');
    creatingElementIn.setAttribute('value',/* Math.random(100)*  */'div');
    creatingElementIn.style.cssFloat = 'right';

    //-----------------------------width input
    let widthIn = document.createElement('input');
    generateForms.appendChild(widthIn);
    widthIn.style.position = 'relative';
    widthIn.style.width = 100 + '%';
    widthIn.setAttribute('class','form-control ');
    widthIn.setAttribute('placeholder','setWidth ');
    widthIn.setAttribute('value',/* Math.random(100)*  */100 + '%');
    widthIn.style.cssFloat = 'right';

    //-----------------------------height input
    let heightIn = document.createElement('input');
    generateForms.appendChild(heightIn);
    heightIn.style.position = 'relative';
    heightIn.style.width = 100 + '%';
    heightIn.setAttribute('class','form-control ');
    heightIn.setAttribute('placeholder','setHeight ');
    heightIn.setAttribute('value',/* Math.random(100) *  */50 + 'px');
    heightIn.style.cssFloat = 'right';

    //-----------------------------margin input
    let marginIn = document.createElement('input');
    generateForms.appendChild(marginIn);
    marginIn.style.position = 'relative';
    marginIn.style.width = 100 + '%';
    marginIn.setAttribute('class','form-control ');
    marginIn.setAttribute('placeholder','setMargin ');
    marginIn.style.cssFloat = 'right';

    //-----------------------------padding input
     let paddingIn = document.createElement('input');
        generateForms.appendChild(paddingIn);
        paddingIn.style.position = 'relative';
        paddingIn.style.width = 100 + '%';
        paddingIn.setAttribute('placeholder','setPadding ');
        paddingIn.setAttribute('class','form-control ');
        paddingIn.style.cssFloat = 'right';

    //---------------------------------------------------

    let addButton = document.createElement('button');
    generateForms.appendChild(addButton);
    addButton.style.width = 100 + '%';
    addButton.innerHTML = 'ADD';
    addButton.setAttribute('class','btn btn-outline-dark ');
    addButton.addEventListener('click',function(){

        let newElement = document.createElement(creatingElementIn.value);
        mainDiv.appendChild(newElement);
        newElement.setAttribute('class','rounded border border-dark ');
        newElement.style.cssFloat = 'left';
        newElement.style.position = 'relative';
        newElement.style.background = 'lightblue';
        newElement.style.width = widthIn.value /* + 'px' */;
        newElement.style.height = heightIn.value /* + 'px' */; 
        newElement.style.margin = marginIn.value + 'px';
        newElement.style.transition = 'all 500ms';
        
        let sellectThisElement = document.getElementsByTagName(newElement);
            for(i = 0; i <= sellectThisElement.length;i++){

                newElement.addEventListener('click',function(){
                    let moveButtom = document.createElement('button');
                    editForm.appendChild(moveButtom);
                    moveButtom.innerHTML = 'Move';
                    moveButtom.style.width = 117 + 'px';
                    moveButtom.setAttribute('class','btn btn-outline-dark ');
                    moveButtom.addEventListener('click', function(){
                        topButton(optionsForm, newElement);
                        bottomButton(optionsForm, newElement);
                        leftButton(optionsForm, newElement);
                        rightButton(optionsForm, newElement);
                    });

                    editForm.appendChild(textEdButton);
                    textEdButton.innerHTML = 'editText';
                    textEdButton.style.width = 117 + 'px';
                    textEdButton.setAttribute('class','btn btn-outline-dark ');
                    textEdButton.style.position = 'relative';
                    textEdButton.style.display = 'block';
                    textEdButton.addEventListener('click',function(){
                        function edition(parentNode){

                            let textEditIn = document.createElement('input');
                            let textOkButton = document.createElement('button');
                            textOkButton.innerHTML = 'OK';
                            optionsForm.appendChild(textOkButton);
                            textOkButton.addEventListener('click',function(){

                            });
                            parentNode.appendChild(textEditIn);                            textEditIn.style.cssFloat = 'right';
                            textEditIn.setAttribute('placeholder','Write Your text');
                            textEditIn.setAttribute('class','form-control '); 

                        };
                        edition(setForm);
                        
                    });

                    editForm.appendChild(styleEdButton);
                    styleEdButton.innerHTML = 'editStyle';
                    styleEdButton.style.width = 117 + 'px';
                    styleEdButton.setAttribute('class','btn btn-outline-dark ');
                    styleEdButton.style.position = 'relative';
                    styleEdButton.style.display = 'block';
                    styleEdButton.addEventListener('click',function(){

                        let cssConsoleButton = document.createElement('button');
                        optionsForm.appendChild(cssConsoleButton);
                        cssConsoleButton.innerHTML = 'Run Console';
                        cssConsoleButton.style.width = 117 + 'px';
                        cssConsoleButton.setAttribute('class','btn btn-outline-dark ');    
                        cssConsoleButton.style.position = 'relative';    
                        cssConsoleButton.style.display = 'block';
                        cssConsoleButton.addEventListener('click',function(){

                            let styleOkButton = document.createElement('button');
                            styleOkButton.innerHTML = 'OK';
                            styleOkButton.style.cssFloat = 'left';
                            styleOkButton.setAttribute('class','btn btn-outline-dark ');
                            styleOkButton.style.width = '10%';    
                            setForm.appendChild(styleOkButton);  

                            let cssConsole = document.createElement('input');
                            setForm.appendChild(cssConsole);
                            cssConsole.setAttribute('placeholder','StyleConsole ');
                            cssConsole.setAttribute('class','form-control ');
                            cssConsole.style.width = '90%';
                            cssConsole.style.cssFloat = 'left';

                            styleOkButton.addEventListener('click',function(){
                                newElement.setAttribute('style', cssConsole.value);
                            });
                        
                        });

                    });

        //--------------------------------------removeButton----------------------------
                    let removeButton = document.createElement('button');
                    editForm.appendChild(removeButton);
                    removeButton.innerHTML = 'Remove';
                    removeButton.style.width = 117 + 'px';
                    removeButton.setAttribute('class','btn btn-outline-dark ');
                    removeButton.addEventListener('click',function(){
                        mainDiv.removeChild(newElement);
                        this.style.display = 'none';
                        editForm.removeChild(moveButtom);
                    });
                });     // newElement.addEventListener
            }       // for loop B
        });     //addButton.addEventListener
});     //generatorButton.addEventListener
 
reloadButton.addEventListener('click',function(){
    location.reload(true);
});



//reloadButon.addEventListener                    
// mainDiv.style.background ='red';

// class BaseItem{
//     constructor(text){
//        this.text=text;
//     }
//     draw(){
//        let element =document.createElement("li");
//        let textnode=document.createTextNode(this.text);
//        element.appendChild(textnode);
//        mainDiv.appendChild(element);
//     }   
//     set content(text){
//        this.text=text;
//     }
//   }

// let item1 =new BaseItem("this is the item I");
// item1.draw();
// item1.content="new content for item1 using the set content";
// item1.draw();

// class StyledItem extends BaseItem{
//     constructor(text,style){
//        super(text);
//        this.style=style;
//     }
//     draw(){
//         let element=document.createElement("li");
//         element.setAttribute("style",this.style);
//         let textnode=document.createTextNode(this.text);
//         element.appendChild(textnode);
//         mainDiv.appendChild(element);
//     }
// }



// let item2=new StyledItem("text",'color:red');
// item2.draw();
// let img = document.createElement('img');
// mainDiv.appendChild(img);
// img.setAttribute('src','http://lorempixel.com/640/480/nightlife');
//  console.log(document.images[0])
