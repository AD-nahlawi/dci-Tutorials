
//   let loanAmount = document.getElementById('loanAmount');
//   let interestRate = document.getElementById('interestRate');
//   let numberOfYears = document.getElementById('numberOfYears');
//   let click = document.getElementById('click');








let fInput= document.getElementById("firstInput");
let sInput=document.getElementById("secundInput");
let unit = document.getElementById("unit");
let labels = document.querySelectorAll("label");


unit.addEventListener("change",unitSelect); 
unit.value = '';
function kmConverter(){
    let kmresult=fInput.value * 0.621371;
    sInput.value = kmresult;
    
}
function mileConverter(){
    let mileResult = sInput.value * 1.60934;
    fInput.value = mileResult;
    
}
function cmConverter(){
    let cmResult = fInput.value * 0.393701;
    sInput.value=cmResult;
    
}
function inConverter(){
  let inResult = sInput.value * 2.54;
  fInput.value = inResult;
  
}
function ceToFaConverter(){
    let faResult = 32 + (fInput.value * 9/5);
    sInput.value=faResult;
    

}

function faToCeConverter(){
    let ceResult =(5/9) * (sInput.value -32)
  fInput.value = ceResult;
  
}
function clearInputs(){
fInput.value = '';
sInput.value = '';
}
// the select onchange 
function unitSelect(){
    console.log(unit.value);
    switch(unit.value){
        case "cm-inche":
            clearInputs();
            fInput.addEventListener("keyup",cmConverter);
            sInput.addEventListener("keyup",inConverter);

            fInput.removeEventListener("keyup",kmConverter);
            sInput.removeEventListener("keyup",mileConverter);
            fInput.removeEventListener("keyup",ceToFaConverter);
            sInput.removeEventListener("keyup",faToCeConverter);

            labels[0].innerHTML="CM";
            labels[1].innerHTML="Inch";      
        console.log("km-mile");
        break;
        case "km-mile":
            clearInputs();
            fInput.addEventListener("keyup",kmConverter);
            sInput.addEventListener("keyup",mileConverter);

            fInput.removeEventListener("keyup",cmConverter);
            sInput.removeEventListener("keyup",inConverter);
            fInput.removeEventListener("keyup",ceToFaConverter);
            sInput.removeEventListener("keyup",faToCeConverter);

            labels[0].innerHTML="KM";
            labels[1].innerHTML="Mile";
        break;
        case "temperatur":
            clearInputs();
            fInput.addEventListener("keyup",ceToFaConverter);
            sInput.addEventListener("keyup",faToCeConverter);

            fInput.removeEventListener("keyup",cmConverter);
            sInput.removeEventListener("keyup",inConverter);
            fInput.removeEventListener("keyup",kmConverter);
            sInput.removeEventListener("keyup",mileConverter);
    
            labels[0].innerHTML="Celsius";
            labels[1].innerHTML="Fahrenheit";
    }
}















// 32.26718719383763

//   click.addEventListener('click',function(){

//     let principal = parseFloat(loanAmount.value);
//     let calculatedInterest =  parseFloat(interestRate.value) / 100 / 12;

//     let calculatedPayment =  parseFloat(numberOfYears.value) * 12;

//     let power = Math.pow(1 + calculatedInterest ,calculatedPayment);
//     let monthly = (principal * power * calculatedInterest) / (power - 1);
//     if(isFinite(monthly)){

//         console.log(monthly.toFixed(2));

//     }else{
//             console.log('you failed something'); 

//     }

// }) ;