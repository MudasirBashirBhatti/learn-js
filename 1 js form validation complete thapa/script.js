const selectForm = document.getElementById("all-sections");
const user = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const phone = document.getElementById("phone");
const check = document.getElementById("confirm-pwd");

// add event to prevent form prom submission 
selectForm.addEventListener('submit',(event)=>{
    event.preventDefault();
    // we are using validate function to check validations 
    validate();
})
const validate = () =>{
    const user = user.value.trim();
    const email = email.value.trim();
    const password = password.value.trim();
    const phone = phone.value.trim();
    const check = check.value.trim();

    // validate username 
    if(user === ""){
        setErrorMsg(user , 'User name cannot be blank');
    }else if( user.length < 2){
        setErrorMsg(user , 'User name Should be more than 2 characters');
    }else{
        setSuccessMsg(user);
    }
}

function setErrorMsg(input, errormsgs){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className= "all error";
    small.innerText = errormsgs;
}