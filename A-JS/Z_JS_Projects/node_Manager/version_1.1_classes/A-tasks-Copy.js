    // reloadButton(){}
    // generatorButton(){}
    //     addButton(){}
    //         moveButtom(){}
    //             leftButton(){}
    //             rightButton(){}
    //             topButton(){}
    //             bottomButton(){}
    //         textEdButton(){}
    //             textOkButton(){}
    //         styleEdButton(){}
    //             cssConsoleButton(){}
    //             styleOkButton(){}
    //         removeButton(){}
class Buttons{
    constructor(){
        //------------------------- reloadButton ----------------------------
        let reloadButton = document.createElement('button');
        body.appendChild(reloadButton);
        reloadButton.innerHTML = 'Reload';
        reloadButton.style.width = 120 + 'px';
        reloadButton.style.position = 'relative';
        reloadButton.style.cssFloat = 'right';
        reloadButton.style.top = -36 + 'px';
        reloadButton.style.right = 5 + 'px';
        reloadButton.setAttribute('class','btn btn-outline-dark ');

        //------------------------- generatorButton ----------------------------
        let generatorButton = document.createElement('button');
        body.appendChild(generatorButton);
        generatorButton.innerHTML = 'Generate';
        generatorButton.style.width = 120 + 'px';
        generatorButton.style.position = 'relative';
        generatorButton.style.display = 'block';
        generatorButton.style.top = 1 + 'px';
        generatorButton.style.left = 5 + 'px';
        generatorButton.setAttribute('class','btn btn-outline-dark ');

                    
    }
    reloadButton(){}
    generatorButton(){}
        addButton(){}
            moveButtom(){}
                leftButton(){}
                rightButton(){}
                topButton(){}
                bottomButton(){}
            textEdButton(){}
                textOkButton(){}
            styleEdButton(){}
                cssConsoleButton(){}
                styleOkButton(){}
            removeButton(){}


}