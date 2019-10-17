

let target_tr = document.getElementById('target-tr');
        let infos = '';


fetch('http://192.168.8.137:3000/states')
.then(function(data){
    return data.json();

}).then(function(item){
        
    item.forEach(function(each){
        
        infos += `
        <tr>
            <td>${each.state}</td>
            <td>${each.capital}</td>
            <td>${each.population}</td>
            <td><img src='${each.image}'></td>
        </tr>
        `
        });
       target_tr.innerHTML = infos;

})