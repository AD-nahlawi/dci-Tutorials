
let body = document.querySelector('body');
let mainDiv = document.createElement('div');
    let setListDiv = document.createElement('div');
    let addButton = document.createElement('button');
    let listDiv = document.createElement('div');
let form = document.createElement('div');
    let lable_1 = document.createElement('label');
    let productNameIn = document.createElement('input');
    let lable_2 = document.createElement('label');
    let productDiscriptionIn = document.createElement('input');
    let lable_3 = document.createElement('label');
    let productCodeIn = document.createElement('input');
    let table = document.createElement('table');
        let trHeader = document.createElement('tr');    
        let thHeader1 = document.createElement('th');    
        let thHeader2 = document.createElement('th');    
        let thHeader3 = document.createElement('th');    
        let trContains = document.createElement('tr');    
        let tdContain_1 = document.createElement('td');    
        let tdContain_2 = document.createElement('td');    
        let tdContain_3 = document.createElement('td');    
        let xButton = document.createElement('button');


class Shopping{

    constructor(){}

    mainDiv(){
        mainDiv.style.width = '100%';
        mainDiv.style.height = 500 + 'px';
        mainDiv.classList = 'main border ';
        body.appendChild(mainDiv);
    }
    setListDiv(){
        setListDiv.style.width = '100%';
        setListDiv.style.height = 250 + 'px';
        setListDiv.classList = 'container border ';
        mainDiv.appendChild(setListDiv);
    }
    addButton(){
            addButton.classList = 'btn btn-info center';
            addButton.style.marginLeft = 65 + 'px';
            addButton.style.width = 88 + '%';
            addButton.style.height = 35 + 'px';
            addButton.innerHTML = 'Add To List';
            mainDiv.appendChild(addButton);
    }
    listDiv(){
        listDiv.style.width = '100%';
        listDiv.style.height = 200 + 'px';
        listDiv.classList = 'container border ';
        mainDiv.appendChild(listDiv);
    }
    form(){
        form.classList = 'form-group';
        setListDiv.appendChild(form);
    }
    lable_1(){
        lable_1.innerHTML = 'Product Name';
        form.appendChild(lable_1);
    }
    productNameIn(){
        productNameIn.classList = 'form-control';
        form.appendChild(productNameIn);
    }
    lable_2(){
        lable_2.innerHTML = 'Product discription';
        form.appendChild(lable_2);
    }
    productDiscriptionIn(){
        productDiscriptionIn.classList = 'form-control';
        form.appendChild(productDiscriptionIn);
    }
    lable_3(){
        lable_3.innerHTML = 'Product code';
        form.appendChild(lable_3);
    }
    productCodeIn(){
        productCodeIn.classList = 'form-control';
        form.appendChild(productCodeIn);
    }
    table(){
        table.classList = 'table';
        listDiv.appendChild(table);
    }
    trHeader(){
        table.appendChild(trHeader);
    }
    thHeader1(){
        thHeader1.innerHTML = 'Product Name';
        trHeader.appendChild(thHeader1);
    }
    thHeader2(){
        thHeader2.innerHTML = 'Product discription';
        trHeader.appendChild(thHeader2);
    }
    thHeader3(){
        thHeader3.innerHTML = 'Product code';
        trHeader.appendChild(thHeader3);
    }
    trContains(){
        table.appendChild(trContains);
    }
    tdContain_1(){
        trContains.appendChild(tdContain_1);
        tdContain_1.innerHTML = 'Name';
    }
    tdContain_2(){
        trContains.appendChild(tdContain_2);
        tdContain_2.innerHTML = 'discription';
    }
    tdContain_3(){
        trContains.appendChild(tdContain_3);
        tdContain_3.innerHTML = 'code';
    }
    xButton(){
        xButton.innerHTML = 'X';
        xButton.style.cssFloat = 'right';
        xButton.classList = 'btn btn-danger';
        
        tdContain_3.appendChild(xButton);
    }
    
}

let trys = new Shopping();
trys.mainDiv();
    trys.setListDiv();
    trys.addButton();
    trys.listDiv();
        trys.form();
            trys.lable_1();
            trys.productNameIn();
            trys.lable_2();
            trys.productDiscriptionIn();
            trys.lable_3();
            trys.productCodeIn();
trys.table();
    trys.trHeader();
        trys.thHeader1();
        trys.thHeader2();
        trys.thHeader3();
    trys.trContains();
        trys.tdContain_1();
        trys.tdContain_2();
        trys.tdContain_3();
        trys.xButton();






























            // let mainDiv = document.createElement('div');
            // mainDiv.style.width = '100%';
            // mainDiv.style.height = 500 + 'px';
            // mainDiv.classList = 'main border ';
            // body.appendChild(mainDiv);

        // let setListDiv = document.createElement('div');
            // setListDiv.style.width = '100%';
            // setListDiv.style.height = 250 + 'px';
            // setListDiv.classList = 'container border ';
            // mainDiv.appendChild(setListDiv);
        
        // let addButton = document.createElement('button');
            // addButton.classList = 'btn btn-info center';
            // addButton.style.marginLeft = 65 + 'px';
            // addButton.style.width = 88 + '%';
            // addButton.style.height = 35 + 'px';
            // addButton.innerHTML = 'Add To List';
            // mainDiv.appendChild(addButton);

        // let listDiv = document.createElement('div');
            // listDiv.style.width = '100%';
            // listDiv.style.height = 200 + 'px';
            // listDiv.classList = 'container border ';
            // mainDiv.appendChild(listDiv);
        
        //------------------------ Form and Inputs----------------------
            // form.classList = 'form-group';
            // setListDiv.appendChild(form);
        
            // lable_1.innerHTML = 'Product Name';
            // form.appendChild(lable_1);
            // productNameIn.classList = 'form-control';
            // form.appendChild(productNameIn);
        
            // lable_2.innerHTML = 'Product discription';
            // form.appendChild(lable_2);
            // productDiscriptionIn.classList = 'form-control';
            // form.appendChild(productDiscriptionIn);
        
            // lable_3.innerHTML = 'Product code';
            // form.appendChild(lable_3);
            // productCodeIn.classList = 'form-control';
            // form.appendChild(productCodeIn);
            
        //---------------------------- table Header-----------------
/*
        let table = document.createElement('table');
            table.classList = 'table';
            listDiv.appendChild(table);
        

        let trHeader = document.createElement('tr');
            table.appendChild(trHeader);
        
        let thHeader1 = document.createElement('th');
            thHeader1.innerHTML = 'Product Name';
            trHeader.appendChild(thHeader1);
        

        let thHeader2 = document.createElement('th');
            thHeader2.innerHTML = 'Product discription';
            trHeader.appendChild(thHeader2);
        

        let thHeader3 = document.createElement('th');
            thHeader3.innerHTML = 'Product code';
            trHeader.appendChild(thHeader3);
            
        //---------------------------- table Contains-----------------

        let trContains = document.createElement('tr');
            table.appendChild(trContains);
        
        
        let tdContain_1 = document.createElement('td');
            trContains.appendChild(tdContain_1);
            tdContain_1.innerHTML = 'Name';


        let tdContain_2 = document.createElement('td');
            trContains.appendChild(tdContain_2);
            tdContain_2.innerHTML = 'discription';

            
        let tdContain_3 = document.createElement('td');
            trContains.appendChild(tdContain_3);
            tdContain_3.innerHTML = 'code';
        
        let xButton = document.createElement('button');
            xButton.innerHTML = 'X';
            xButton.style.cssFloat = 'right';
            xButton.classList = 'btn btn-danger';
        
            tdContain_3.appendChild(xButton);
     */