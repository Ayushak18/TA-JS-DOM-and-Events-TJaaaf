let form = document.querySelector('.form');

let userNameError = "";
let emailError = "";
let phoneError = "";
let passwordError = "";

function submitForm(event){
    event.preventDefault();
    let userNameElement = event.target.elements.username;
    let emailElement = event.target.elements.email;
    let phoneElement = event.target.elements.phoneNumber;
    let passwordElement = event.target.elements.password;
    let confirmPasswordElement = event.target.elements.confirmPassword;

    if(userNameElement.value.length < 4){
        userNameError = "Username should contain more than 4 characters";
    }else if(!isNaN(userNameElement.value)){
        userNameError = 'UserName cannot be number';
    }else{
        userNameError = '';
    }
    userNameElement.nextElementSibling.innerText = userNameError;
    
    if(emailElement.value.length < 6){
        emailError = "Email length cannot be less than 6 characters"
    }else{
        emailError = "";
    }
    emailElement.nextElementSibling.innerText = emailError;

    if(phoneElement.value.length < 7){
        phoneError = "Cannot be less than 7";
    }else{
        phoneError = "";
    }
    phoneElement.nextElementSibling.innerText = phoneError;

    if(passwordElement.value !== confirmPasswordElement.value){
        passwordError ="Password and Confirm Password should be same";
    }else{
        passwordError = "";
    }
    confirmPasswordElement.nextElementSibling.innerText = passwordError;
}



form.addEventListener('submit',submitForm);