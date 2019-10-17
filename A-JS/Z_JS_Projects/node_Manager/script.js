// ---------------------------------------------------------Colors Functions
let allColors = '012ABCDEF3456789';
function hexaRandom(){
    let color = "#";
    for (i = 0; i < 6; i++){
        let random16 = Math.floor(Math.random() * 16);
        color += allColors[random16];
        };
        return color;
};
//---------------------------------------HEAD-------------------------------------
//let head = document.head;
//let title = document.createElement('title');
 //  title.textContent = 'Nodes Manager';
 //   head.appendChild(title);
//let meta1 = document.createElement('meta');
//    meta1.setAttribute('charset','utf-8');
//    head.appendChild(meta1);
//let meta2 = document.createElement('meta');
  //  meta2.setAttribute('name','viewport');
  //  meta2.setAttribute('content','width=device-width, initial-scale=1, shrink-to-fit=no');
   // head.appendChild(meta2);
// let bootstrap_link = document.createElement('link');
    // bootstrap_link.setAttribute('rel','stylesheet');
    // bootstrap_link.setAttribute('href','https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css');
    // bootstrap_link.setAttribute('href','/html-repo/BS.css');
    // bootstrap_link.setAttribute('integrity','sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T');
    // bootstrap_link.setAttribute('crossorigin','anonymous');
    // head.appendChild(bootstrap_link);
//let google_Font_link = document.createElement('link');
 //   google_Font_link.setAttribute('href','https://fonts.googleapis.com/css?family=Anton&display=swap');
   // google_Font_link.setAttribute('rel','stylesheet');
  //  head.appendChild(google_Font_link);
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

let body = document.body;
    body.style.background = 'whitesmoke  ';

//------------------------------------------------------------generatorButton
let generatorButton = document.createElement('button');
    generatorButton.innerHTML = 'Generate';
    generatorButton.style.width = 20 + '%';
    generatorButton.style.position = 'absolute';
    generatorButton.style.display = 'block';
    generatorButton.style.top = 1 + 'px';
    generatorButton.style.left = 1 + 'px';
    generatorButton.setAttribute('class','btn btn-primary ');
    body.appendChild(generatorButton);

//------------------------------------------------------------reloadButton
let reloadButton = document.createElement('button');
    reloadButton.innerHTML = 'Reload';
    reloadButton.style.width = 10 + '%';
    reloadButton.style.position = 'absolute';
    reloadButton.style.cssFloat = 'right';
    reloadButton.style.top = 1 + 'px';
    reloadButton.style.right = 1 + 'px';
    reloadButton.setAttribute('class','btn btn-primary ');
    body.appendChild(reloadButton);

//--------------------------------------------------------------consoleDiv
let consoleDiv = document.createElement('div');
    consoleDiv.style.width = 70 + '%';
    consoleDiv.style.height = 40 + 'px';
    consoleDiv.setAttribute('class','border border-dark ');
    consoleDiv.style.position = 'absolute';
    consoleDiv.style.left = 20 +'%';
    consoleDiv.style.top =  1 +'px';
    consoleDiv.style.overflow = 'hidden';
    document.body.appendChild(consoleDiv);

//------------------------------------------------------------generateDiv
let generateDiv = document.createElement('div');
    generateDiv.style.cssFloat = 'left';
    generateDiv.style.textAlign = 'center';
    generateDiv.style.width = 20 + '%';
    generateDiv.style.height = 280 + 'px';
    generateDiv.setAttribute('class','border border-dark ');
    generateDiv.style.position = 'absolute';
    generateDiv.style.top = 40 + 'px';
    generateDiv.style.left = 1 + 'px';
    generateDiv.style.overflow = 'hidden';
    document.body.appendChild(generateDiv);

//------------------------------------------------------------mainDiv
let mainDiv = document.createElement('div');
    mainDiv.style.cssFloat = 'left';
    mainDiv.style.width = 70 + '%';
    mainDiv.style.height = 560 + 'px';
    mainDiv.setAttribute('class','border border-dark ');
    mainDiv.style.position = 'absolute';
    mainDiv.style.left = 20 + '%';
    mainDiv.style.top = 40 + 'px';
    mainDiv.style.overflow = 'hidden';
    document.body.appendChild(mainDiv);

//------------------------------------------------------------settingsDiv
let settingsDiv = document.createElement('div');
    settingsDiv.style.textAlign = 'center';
    settingsDiv.innerHTML = '<h5 style="background:gray">Settings</h5>';
    settingsDiv.style.width = 20 + '%';
    settingsDiv.style.height = 280 + 'px';
    settingsDiv.setAttribute('class','border border-dark ');
    settingsDiv.style.position = 'absolute';
    settingsDiv.style.top = 320 + 'px';
    settingsDiv.style.left = 1 + 'px';
    settingsDiv.style.overflow = 'hidden';
    document.body.appendChild(settingsDiv);

//------------------------------------------------------------infosDiv
let infosDiv = document.createElement('div');
    infosDiv.style.textAlign = 'center';
    infosDiv.innerHTML = '<h5 style="background:gray">Infos</h5>';
    infosDiv.style.width = 10 + '%';
    infosDiv.style.height = 205 + 'px';
    infosDiv.setAttribute('class','border border-dark ');
    infosDiv.style.position = 'absolute';
    infosDiv.style.right = 1 +'px';
    infosDiv.style.top =  395 +'px';
    infosDiv.style.overflow = 'hidden';
    document.body.appendChild(infosDiv);

//------------------------------------------------------------optionsDiv
let optionsDiv = document.createElement('div');
    optionsDiv.innerHTML = '<h5 style="background:gray">Options</h5>';
    optionsDiv.style.textAlign = 'center';
    optionsDiv.style.width = 10 + '%';
    optionsDiv.style.height = 355 + 'px';
    optionsDiv.setAttribute('class','border border-dark ');
    optionsDiv.style.position = 'absolute';
    optionsDiv.style.right = 1 +'px';
    optionsDiv.style.top = 40 +'px';
    optionsDiv.style.overflow = 'hidden';
    document.body.appendChild(optionsDiv);

//-----------------------------height input
let heightIn = document.createElement('input');
    heightIn.style.position = 'relative';
    heightIn.style.width = 100 + '%';
    heightIn.setAttribute('class','form-control ');
    heightIn.setAttribute('placeholder','setHeight ');
    heightIn.setAttribute('value',/* Math.random(100) *  */ 200 );
    heightIn.style.cssFloat = 'right';

//-------------------------------------------------------------creatingElementIn
let creatingElementIn = document.createElement('input');
    creatingElementIn.style.position = 'relative';
    creatingElementIn.style.width = 100 + '%';
    creatingElementIn.setAttribute('class','form-control ');
    creatingElementIn.setAttribute('placeholder','enter Element Name');
    creatingElementIn.setAttribute('value',/* Math.random(100)*  */'div');
    creatingElementIn.style.cssFloat = 'right';

//----------------------------------------------------------------------widthIn
let widthIn = document.createElement('input');
    widthIn.style.position = 'relative';
    widthIn.style.width = 100 + '%';
    widthIn.setAttribute('class','form-control ');
    widthIn.setAttribute('placeholder','setWidth ');
    widthIn.setAttribute('value',/* Math.random(100)*  */50 + '%');
    widthIn.style.cssFloat = 'right';

//----------------------------------------------------------------------textEdButton
let textEdButton = document.createElement('button');
    textEdButton.innerHTML = 'Text Edit';
    textEdButton.style.width = 100 + '%';
    textEdButton.setAttribute('class','btn btn-outline-dark ');
    textEdButton.style.position = 'relative';
    textEdButton.style.display = 'block';

//----------------------------------------------------------------------textEditIn
let textEditIn = document.createElement('input');
    textEditIn.style.cssFloat = 'left';
    textEditIn.style.width = 90 + '%';
    textEditIn.setAttribute('placeholder','Write Your text');
    textEditIn.setAttribute('class','form-control ');

//----------------------------------------------------------------------textOkButton
let textOkButton = document.createElement('button');
    textOkButton.innerHTML = 'OK';
    textOkButton.style.cssFloat = 'left';
    textOkButton.style.width = 10 + '%';
    textOkButton.setAttribute('class','btn btn-outline-dark ');

//----------------------------------------------------------------------moveButtom
let moveButtom = document.createElement('button');
    moveButtom.innerHTML = 'Moving';
    moveButtom.style.width = 100 + '%';
    moveButtom.setAttribute('class','btn btn-outline-dark ');

//----------------------------------------------------------------------styleEdButton
let styleEdButton = document.createElement('button');
    styleEdButton.innerHTML = 'Styling';
    styleEdButton.style.width = 100 + '%';
    styleEdButton.setAttribute('class','btn btn-outline-dark ');
    styleEdButton.style.position = 'relative';
    styleEdButton.style.display = 'block';

//----------------------------------------------------------------------cssConsoleButton
let cssConsoleButton = document.createElement('button');
    cssConsoleButton.innerHTML = 'CSS Console';
    cssConsoleButton.style.width = 100 + '%';
    cssConsoleButton.setAttribute('class','btn btn-outline-dark ');    
    cssConsoleButton.style.position = 'relative';    
    cssConsoleButton.style.display = 'block';

//----------------------------------------------------------------------styleOkButton
let styleOkButton = document.createElement('button');
    styleOkButton.innerHTML = 'OK';
    styleOkButton.style.cssFloat = 'left';
    styleOkButton.setAttribute('class','btn btn-outline-dark ');
    styleOkButton.style.width = '10%';

//----------------------------------------------------------------------cssConsole
let cssConsole = document.createElement('input');
    cssConsole.setAttribute('placeholder','StyleConsole ');
    cssConsole.setAttribute('class','form-control ');
    cssConsole.style.width = '90%';
    cssConsole.style.cssFloat = 'left';

//----------------------------------------------------------------------addButton
let addButton = document.createElement('button');
    addButton.style.width = 100 + '%';
    addButton.innerHTML = 'ADD';
    addButton.setAttribute('class','btn btn-outline-dark ');

//---------------------------------------------------------------------------------------------------
let removeButton = document.createElement('button');
    removeButton.innerHTML = 'X';
    removeButton.style.cssFloat = 'right';
    removeButton.setAttribute('class','btn btn-danger ');

//----------------------------------------------------------------------changeButton
let changeButton = document.createElement('button');
    changeButton.innerHTML = 'Change';
    changeButton.setAttribute('class','btn btn-info');
    changeButton.style.cssFloat = 'left';









// ---------------------------------------------------------leftButton
var leftButton = document.createElement('button');
    leftButton.innerHTML = 'L';
    leftButton.setAttribute('class','btn btn-outline-dark ');
    leftButton.style.position = 'absolute';
    leftButton.style.left = '0.5%';
let left_Right_Counter = 0;
function leftButtons(thisElement){
    thisElement.appendChild(leftButton);
    leftButton.addEventListener('click',function(){
         left_Right_Counter -= 20;
        thisElement.style.left = left_Right_Counter + 'px';
        left_Right_Counter++ ;
    });
};
//------------------------------------------------------------rightButton
var rightButton = document.createElement('button');
    rightButton.innerHTML = 'R';
    rightButton.style.right = '0.5%';
    rightButton.style.position = 'absolute';
    rightButton.style.right = 1 + '%';
    rightButton.setAttribute('class','btn btn-outline-dark ');
function rightButtons(thisElement){
    thisElement.appendChild(rightButton);
    rightButton.addEventListener('click',function(){
        left_Right_Counter += 20;
        thisElement.style.left = left_Right_Counter + 'px';
        left_Right_Counter--;
    });
};

//-------------------------------------------------------------topButton
var topButton = document.createElement('button');
    topButton.innerHTML = 'T';
    topButton.style.position = 'absolute';
    topButton.style.left = 50 + '%'
    topButton.setAttribute('class','btn btn-outline-dark ');
let top_bottom_Counter = 0;
function topButtons(thisElement){
    thisElement.appendChild(topButton);
    topButton.addEventListener('click',function(){
         top_bottom_Counter -= 20;
         thisElement.style.top = top_bottom_Counter + 'px';
         top_bottom_Counter++;
    });
};

//-------------------------------------------------------------bottomButton
var bottomButton = document.createElement('button');
    bottomButton.style.position = 'absolute';
    bottomButton.style.left = 50 + '%';
    bottomButton.style.bottom = '1%';
    bottomButton.innerHTML = 'B';
    bottomButton.setAttribute('class','btn btn-outline-dark ');
function bottomButtons(thisElement){
    thisElement.appendChild(bottomButton);
    bottomButton.addEventListener('click',function(){
        top_bottom_Counter += 20;
        thisElement.style.top = top_bottom_Counter + 'px';
        top_bottom_Counter--;
    });
};






 


/* ************************************************************************************************************** */
generatorButton.addEventListener('click',function(){

    generateDiv.appendChild(creatingElementIn);
    generateDiv.appendChild(widthIn);
    generateDiv.appendChild(heightIn);

    /* ************************************************************************************************************** */
    generateDiv.appendChild(addButton);
    addButton.addEventListener('click',function(){

        let newElement = document.createElement(creatingElementIn.value);
            newElement.setAttribute('class','rounded border border-dark ');
            newElement.style.cssFloat = 'left';
            newElement.style.position = 'relative';
            newElement.style.background = hexaRandom();
            newElement.style.width = widthIn.value /* + 'px' */;
            newElement.style.height = heightIn.value + 'px'; 
            newElement.style.transition = 'all 500ms';
            mainDiv.appendChild(newElement);

        let sellectThisElement = document.getElementsByTagName(newElement);
        for(i = 0; i <= sellectThisElement.length;i++){

            /* ************************************************************************************************************** */
            newElement.addEventListener('mouseover',function(){
                newElement.appendChild(removeButton);
                newElement.appendChild(changeButton);

                /* ************************************************************************************************************** */
                changeButton.addEventListener('click',function(){

                    settingsDiv.appendChild(moveButtom);
                    moveButtom.addEventListener('click', function(){
                        textEditIn.remove();
                        textOkButton.remove();
                        cssConsoleButton.remove();
                        styleOkButton.remove();
                        cssConsole.remove();
                        // moveButtom.remove();
                        // textEdButton.remove();
                        // styleEdButton.remove();
                        leftButton.style.top =/* newElement.style.height.value   - */35  +'%';
                        rightButton.style.top = /* newElement.style.height.value - */35  +'%';
                        topButtons(newElement);
                        bottomButtons(newElement);
                        leftButtons(newElement);
                        rightButtons(newElement);
                    });
                    moveButtom.addEventListener('mouseover',function(){
                        infosDiv.innerHTML = '<h5 style="background:gray">Settings</h5>move your Element where you want';
                    });
                    //--------------------------------------------------------------------------------------------------

                    settingsDiv.appendChild(textEdButton);

                    /* ************************************************************************************************************** */
                    textEdButton.addEventListener('click',function(){ 
                        styleOkButton.remove()
                        cssConsole.remove()
                        cssConsoleButton.remove()
                        leftButton.remove();
                        rightButton.remove();
                        topButton.remove();
                        bottomButton.remove();
                        
                        
                        consoleDiv.appendChild(textOkButton);
                        consoleDiv.appendChild(textEditIn);                            
                    
                    });

                    /* ************************************************************************************************************** */
                    textEdButton.addEventListener('mouseover',function(){
                        infosDiv.innerHTML = '<h5 style="background:gray">Settings</h5>Add or Edit Text to your Element';
                    });

                    //--------------------------------------------------------------------------------------------------

                    settingsDiv.appendChild(styleEdButton);

                    /* ************************************************************************************************************** */
                    styleEdButton.addEventListener('click',function(){
                        
                            leftButton.remove();
                            rightButton.remove();
                            topButton.remove();
                            bottomButton.remove();
                            textEditIn.remove();
                            textOkButton.remove();
                            optionsDiv.appendChild(cssConsoleButton);

                            /* ************************************************************************************************************** */
                            cssConsoleButton.addEventListener('click',function(){

                                textOkButton.remove();
                                textEditIn.remove();
                                consoleDiv.appendChild(styleOkButton); 
                                consoleDiv.appendChild(cssConsole);

                            /* ************************************************************************************************************** */
                                styleOkButton.addEventListener('click',function(){
                                    newElement.setAttribute('style', cssConsole.value);
                                });
                            });
                    });

                    /* ************************************************************************************************************** */
                    styleEdButton.addEventListener('mouseover',function(){
                        infosDiv.innerHTML = '<h5 style="background:gray">Settings</h5>Add or Edit the Style of your Element';
                    }); // styleEdButton.addEventListener

                    //--------------------------------------------------------------------------------------------------

                }); // changeButton.addEventListener
            }); // newElement.addEventListener
        }; // loop
    }); // addButton.addEventListener
}); // generatorButton.addEventListener
 
reloadButton.addEventListener('click',function(){
    location.reload(true);
});

