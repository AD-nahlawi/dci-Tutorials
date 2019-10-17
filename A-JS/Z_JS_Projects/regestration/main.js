let result_Form = document.getElementById('rf');
result_Form.style.display = 'none';

let personal_form = document.getElementById('personal_form');

let first_Name = document.getElementById('First_Name');
let last_Name = document.getElementById('Last_Name');
let birth_Date = document.getElementById('Birth_Date');
let local_storge_Person_Array = [

    {firstname:first_Name.value},
    {lastname:last_Name.value},
    {birthdate:birth_Date.value},
    
]

let str_firstName = JSON.stringify(local_storge_Person_Array[0]);
let str_lastName = JSON.stringify(local_storge_Person_Array[1]); 
let str_birthDate = JSON.stringify(local_storge_Person_Array[2]);

let personal_button_next = document.getElementById('personal_button_next');
personal_button_next.addEventListener('click',function(){
    personal_form.style.display = 'none';
    address_form.style.display = 'block';
localStorage.setItem('personInfo',str_firstName + str_lastName + str_birthDate);
});



let address_form = document.getElementById('address_form');
address_form.style.display = 'none';

let country = document.getElementById('Country');
let city = document.getElementById('City');
let street = document.getElementById('Street');
let local_storge_Country_Array = [

    {country:country.value},
    {city:city.value},
    {street:street.value}
]

let str_country = JSON.stringify(local_storge_Country_Array[0]);
let str_city = JSON.stringify(local_storge_Country_Array[1]); 
let str_street = JSON.stringify(local_storge_Country_Array[2]);

let address_button_next = document.getElementById('address_button_next');
let address_button_back = document.getElementById('address_button_back');
address_button_next.addEventListener('click',function(){
    address_form.style.display = 'none';
    email_form.style.display = 'block';
localStorage.setItem('country',str_country + str_city + str_street);
});
address_button_back.addEventListener('click',function(){
    address_form.style.display = 'none';
    personal_form.style.display = 'block';
});




let email_form = document.getElementById('email_form');
email_form.style.display = 'none';

let user_Name = document.getElementById('User_Name');
let email = document.getElementById('Email');
let password = document.getElementById('Password');
let local_storge_email_Array = [

    {user_Name:user_Name.value},
    {email:email.value},
    {password:password.value}
]

let str_user_Name = JSON.stringify(local_storge_email_Array[0]);
let str_email = JSON.stringify(local_storge_email_Array[1]); 
let str_password = JSON.stringify(local_storge_email_Array[2]);

let email_button_finish = document.getElementById('email_button_finish');
let email_button_back = document.getElementById('email_button_back');
email_button_back.addEventListener('click',function(){
    email_form.style.display = 'none';
    address_form.style.display = 'block';
});


email_button_finish.addEventListener('click',function(){
    email_form.style.display = 'none';
    result_Form.style.display = 'block';
    localStorage.setItem('emailInfo',str_user_Name + str_email + str_password);
    
document.getElementById('firstName').value = 'first_Name is: ' + first_Name.value;
document.getElementById('lastName').value = 'last_Name is: ' + last_Name.value;
document.getElementById('birthDate').value = 'birth_Date is: ' + birth_Date.value;
document.getElementById('country').value = 'country is: ' + country.value;
document.getElementById('city').value = 'city is: ' + city.value;
document.getElementById('street').value = 'street is: ' + street.value;
document.getElementById('userName').value = 'user_Name is: ' + user_Name.value;
document.getElementById('email').value = 'email is: ' + email.value;
document.getElementById('password').value = 'password is: ' + password.value;
});

