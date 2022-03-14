const form = document.querySelector("form");
const emailInput = document.querySelector('input[type="email"]');
const btn = document.querySelector('button');
let emailReg = /^(\w|\.|\_|\-)+[@](\w|\.|\_|\-)+[.]\w{2,3}$/;

btn.addEventListener('click',submitForm);

function submitForm(e) {
    let errors = [];

    if(emailReg.test(emailInput.value) == false){
        errors.push(`Please provide a valid email address`);
    }
    
    if(errors.length != 0){
        form.classList.add('error');
        e.preventDefault();
    }else{
        form.submit();
    }
}