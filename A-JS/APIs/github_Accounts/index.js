
let body = document.body;
//------------------------------------------------------------searchButton
let searchButton = document.createElement('button');
    searchButton.innerHTML = 'Search';
    searchButton.style.width = 20 + '%';
    searchButton.style.position = 'absolute';
    searchButton.style.display = 'block';
    searchButton.style.top = 1 + 'px';
    searchButton.style.left = 1 + 'px';
    searchButton.setAttribute('class','btn btn-primary ');
    body.appendChild(searchButton);

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
    reloadButton.addEventListener('click',function(){
        location.reload(true);
    })
//--------------------------------------------------------------searchDiv
let searchDiv = document.createElement('div');
    searchDiv.style.width = 70 + '%';
    searchDiv.style.height = 40 + 'px';
    searchDiv.setAttribute('class','border border-dark ');
    searchDiv.style.position = 'absolute';
    searchDiv.style.left = 20 +'%';
    searchDiv.style.top =  1 +'px';
    searchDiv.style.overflow = 'hidden';
    document.body.appendChild(searchDiv);

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
    // mainDiv.style.overflow = 'hidden';
    document.body.appendChild(mainDiv);
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


    let user_Name_In = document.createElement('input');
    user_Name_In.style.position = 'relative';
    user_Name_In.style.width = 100 + '%';
    user_Name_In.setAttribute('class','form-control ');
    user_Name_In.setAttribute('placeholder','Enter your Account name ');
    user_Name_In.setAttribute('value','ad-nah');
    user_Name_In.style.cssFloat = 'right';
    searchDiv.appendChild(user_Name_In);
    

    
    let table =  `
    <table id="selectedColumn" class="table table-striped table-bordered table-sm" cellspacing="0" width="100%">
    <thead>
      <tr>
        <th class="th-sm">state</th>
        <th class="th-sm">capital</th>
        <th class="th-sm">population</th>
        <th class="th-sm">image</th>
      </tr>
    </thead>
    <tbody id="target-tr">




    </tbody>
    </table>                                                        
    `
    mainDiv.innerHTML = table;
    let tbody = document.getElementById('target-tr');
        




        // <tr>
        //     <td class="th-sm">state</td>
        //     <td class="th-sm">capital</td>
        //     <td class="th-sm">population</td>
        //     <td class="th-sm">image</td>
        // </tr>




















    searchButton.addEventListener('click',function(){
            // mainDiv.innerHTML = user_Name_In.value;
    })




    fetch('https://api.github.com/users')
    .then(function(json){
        return json.json();
    })
    .then(function(data){
        let newRow = '';
        data.forEach(row => {
            newRow += `
            <tr>
                <td class="th-sm">${row.login}</td>
                <td class="th-sm">${row.id}</td>
                <td class="th-sm">${row.type}</td>
                <td class="th-sm">${row.site_admin}</td>
            </tr>
            `    
            tbody.innerHTML = newRow;

        });


        console.log(data)
        
    })


