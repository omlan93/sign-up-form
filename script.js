const inputFiled = document.querySelectorAll("input")

console.log(inputFiled);

const password = document.querySelector("input[id='password']")
console.log(password);
const confirmPassword = document.querySelector("input[id='confirm_password']")
console.log(confirmPassword);

const form = document.querySelector("form");
console.log(form);

const confirmPassError = document.querySelector(".confirm-pass-span")

form.addEventListener('submit', (event) => {

    if (password.value != confirmPassword.value) {
        confirmPassError.textContent = "Password and confirm password must match";
        confirmPassError.style.padding = "2px";
        event.preventDefault();

    }
    else {
        confirmPassError.textContent = "";
        confirmPassError.style.padding = "0";
    }
})