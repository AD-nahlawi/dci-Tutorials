const appKey = 'a54fee1878380e9147f7f7180644f6c8';
let button = document.querySelector('#button');
button.addEventListener('click',search);

function weatherBallon(city) {
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+ city + '&appid=' + appKey)
.then(function(resp){return resp.json();})    
.then(function(data){ 
    console.log(data);
    drawWeather(data);
})    
.catch(function(){ })  ;  
}
function drawWeather(data) {
    var celsius = Math.round(parseFloat(data.main.temp)-273.15);
    var description = data.weather[0].description;

    document.querySelector('#description').innerHTML = description;
    document.querySelector('#temp').innerHTML = celsius + '&deg;';
    document.querySelector('#locaition').innerHTML = data.name;

  }
function search() {
    let cityName = city.value;
      weatherBallon(cityName);
  }