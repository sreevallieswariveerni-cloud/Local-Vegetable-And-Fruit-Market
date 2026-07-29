// Forms
const loginForm = document.getElementById("login");
const registerForm = document.getElementById("register");

// Tabs
const tabs = document.querySelectorAll(".tab");

// Show Login Form
function loginTab(){

    loginForm.style.display = "block";
    registerForm.style.display = "none";

    tabs[0].classList.add("active");
    tabs[1].classList.remove("active");

}

// Show Register Form
function registerTab(){

    loginForm.style.display = "none";
    registerForm.style.display = "block";

    tabs[1].classList.add("active");
    tabs[0].classList.remove("active");

}

// Login Password Show/Hide
function showLoginPassword(){

    const password = document.getElementById("loginPass");

    if(password.type === "password"){

        password.type = "text";

    }else{

        password.type = "password";

    }

}

// Register Password Show/Hide
function showRegisterPassword(){

    const password = document.getElementById("registerPass");

    if(password.type === "password"){

        password.type = "text";

    }else{

        password.type = "password";

    }

}