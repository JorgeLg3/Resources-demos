const form = document.body.querySelector('form');

const email = document.querySelector('#email');
const emailerror = document.querySelector('#email + span.error');

email.addEventListener('change', function(event){
    if (email.validity.valid){
        emailerror.textContent = '';
    } else {
        showError();
    }
});

const country = document.querySelector('#country');
const countryerror = document.querySelector('#country + span.error');

country.addEventListener('change', function(event){
    if (country.validity.valid){
        countryerror.textContent = '';
    } else {
        if(country.validity.valueMissing) {
            countryerror.textContent =  'You need to enter a contry';
        } else if(country.validity.tooShort){
            countryerror.textContent = `Country should be at least ${country.minLength} characters, you entered ${country.value.length}`;
        }
    }
});

const password = document.querySelector('#password');
const passworderror = document.querySelector('#password + span.error');

password.addEventListener('change', function(event){
    if (password.validity.valid){
        passworderror.textContent = '';
    } else {
        if(password.validity.valueMissing) {
            passworderror.textContent =  'You need to enter a password';
        } else if(password.validity.tooShort){
            passworderror.textContent = `Password should be at least ${password.minLength} characters, you entered ${password.value.length}`;
        }
    }
});

const confirmpsw = document.querySelector('#confirm');
const confirmerror = document.querySelector('#confirm + span.error');

confirmpsw.addEventListener('input', function(event){
    if(confirmpsw.value !== password.value){
        confirmerror.textContent = `Passwords should be match`;
    }
    else if(confirmpsw.validity.valid){
        confirmerror.textContent = '';
    } else {
        if(confirmpsw.validity.valueMissing) {
            confirmerror.textContent =  'You need to confirm password';
        }
    }
});


form.addEventListener('submit', function (event){
    if(!email.validity.valid){
        alert("Fields required to check before submit!");
        showError();
        event.preventDefault();
    } else{
        alert("Succesfull sumited!");
    }
});

function showError() {
    if(email.validity.valueMissing) {
        emailerror.textContent = 'You need to enter an e-mail addres';
    } else if(email.validity.typeMismatch){
        emailerror.textContent = ' Entered value needs to be an e-mail addres';
    }






}