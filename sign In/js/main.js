let loginForm = document.getElementById("loginForm")
let loginEmail = document.getElementById("loginEmail")
let loginPassword = document.getElementById("loginPassword")
let loginAlert = document.getElementById("loginAlert")
let loginSuccessAlert = document.getElementById("loginSuccessAlert")

let allUsers = [];

if (localStorage.getItem("allUsers") != null) {
    allUsers = JSON.parse(localStorage.getItem("allUsers"))
}

loginForm.addEventListener("submit", function (e) {

    e.preventDefault();

    login() 

});

function login() {
    let userData = {
        email: loginEmail.value,
        password: loginPassword.value,
    };
    console.log(userData);

    if (loginIsValid(userData) == true) {
        console.log("you Are Logged In");
        loginSuccessAlert.classList.replace("d-none", "d-block");
        loginAlert.classList.replace("d-block", "d-none");

        setTimeout(function(){
            window.location.href="../welcome/welcome.html";
        },2000);
    } else {
        console.log("user not Found,please Sign up!");
        loginSuccessAlert.classList.replace("d-block", "d-none");
        loginAlert.classList.replace("d-none", "d-block");

    }
}

function loginIsValid(userData) {
        for (let i = 0; i < allUsers.length; i++) {
            if (
                allUsers[i].email.toLowerCase() == userData.email.toLowerCase() &&
                allUsers[i].password.toLowerCase() == userData.password.toLowerCase()

            ) {
                console.log("user Found");
                localStorage.setItem("userName",allUsers[i].name);
                return true;
            }

        }
    }