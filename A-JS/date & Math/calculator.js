
//   let loanAmount = document.getElementById('loanAmount');
//   let interestRate = document.getElementById('interestRate');
//   let numberOfYears = document.getElementById('numberOfYears');
//   let click = document.getElementById('click');








let fInput  = document.getElementById("firstInput");
let sInput  = document.getElementById("secundInput");
let rOutput = document.getElementById('resultOutput');
let unit    = document.getElementById("unit");
let labels  = document.querySelectorAll("label");
let rButton = document.getElementById('rButton');

unit.addEventListener("change",unitSelect); 
unit.value = '';
function addition(){rOutput.value = parseFloat(fInput.value) + parseFloat(sInput.value)};
function subtraction(){rOutput.value = fInput.value - sInput.value;};
function multiplication(){rOutput.value = fInput.value * sInput.value;};
function division(){rOutput.value = fInput.value / sInput.value;};
function modulus(){rOutput.value = fInput.value % sInput.value;};

function clearInputs(){
fInput.value = '';
sInput.value = '';
};
// the select onchange 
function unitSelect(){

    switch(unit.value){
        case "addition":
            clearInputs();
            fInput.addEventListener('keyup',addition);
            sInput.addEventListener('keyup',addition);
            rOutput.addEventListener('keyup',addition);                            
            labels[1].innerHTML="<h4>+</h4>";               
            break;
        case "subtraction":
            clearInputs();
            fInput.addEventListener("keyup",subtraction);
            sInput.addEventListener("keyup",subtraction);
            rOutput  .addEventListener("keyup",subtraction); 
            labels[1].innerHTML="<h4>-</h4>";
        break;
        case "multiplication":
            clearInputs();
            rOutput.addEventListener("keyup",multiplication);
            sInput.addEventListener("keyup",multiplication);
            rOutput.addEventListener("keyup",multiplication);
            labels[1].innerHTML="<h4>*</h4>";
        break;
        case "division":
            clearInputs();
            fInput.addEventListener("keyup",division);
            sInput.addEventListener("keyup",division);
            rOutput.addEventListener("keyup",division);
            labels[1].innerHTML="<h4>/</h4>";
        break;
        case "modulus":
            clearInputs();
            fInput.addEventListener("keyup",modulus);
            sInput.addEventListener("keyup",modulus);
            rOutput.addEventListener("keyup",modulus);
            labels[1].innerHTML="<h4>%</h4>";
    };
};



















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