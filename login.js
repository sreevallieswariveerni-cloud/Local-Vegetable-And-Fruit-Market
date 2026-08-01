

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
// ===============================
// DARK MODE
// ===============================

const themeBtn = document.getElementById("theme-btn");

if (themeBtn) {

    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark");
        themeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
    }

    themeBtn.addEventListener("click", function () {

        document.body.classList.toggle("dark");

        if (document.body.classList.contains("dark")) {
            localStorage.setItem("theme", "dark");
            themeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
        } else {
            localStorage.setItem("theme", "light");
            themeBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
        }

    });

}


// ===============================
// RTL MODE
// ===============================

const rtlBtn = document.getElementById("rtl-btn");

if (rtlBtn) {

    rtlBtn.addEventListener("click", function () {

        if (document.documentElement.dir === "rtl") {
            document.documentElement.dir = "ltr";
        } else {
            document.documentElement.dir = "rtl";
        }

    });

}