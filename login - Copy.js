function togglePassword(inputId, icon){

    const input = document.getElementById(inputId);

    if(input.type === "password"){

        input.type = "text";
        icon.innerHTML = '<i data-lucide="eye"></i>';

    }else{

        input.type = "password";
        icon.innerHTML = '<i data-lucide="eye-off"></i>';

    }

    lucide.createIcons();
}

function showLoginPassword(icon){
    togglePassword("loginPass", icon);
}

function showRegisterPassword(icon){
    togglePassword("registerPass", icon);
}

function showConfirmPassword(icon){
    togglePassword("confirmPass", icon);
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