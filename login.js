
var btnSignin = document.querySelector("#signin");
var btnSignup = document.querySelector("#signup");

var body = document.querySelector("body");


btnSignin.addEventListener("click", function () {
   body.className = "sign-in-js"; 
});

btnSignup.addEventListener("click", function () {
    body.className = "sign-up-js";
})

function Register(name = "", email = "", password = "") {
  this._name = name
  this._email = email
  this._password = password
}

var user 

function erro(tag) {
  document.querySelector(tag).style.display = "block"
}



function register() {
  const name = document.querySelector("#register-name").value;
  const email = document.querySelector("#register-email").value;
  const password = document.querySelector("#register-password").value;

  user = new Register(name, email, password)

  if (user._email == "" || user._name == "" || user._password == "") {
    erro("#erro-register")
  }else {
    body.className = "sign-in-js"; 
  }
}

function login() {
  const email = document.querySelector("#login-email").value;
  const password = document.querySelector("#login-password").value;
  
  if (email === user._email && password === user._password){
    window.location = "./home.html"
  }else if (email == "" || password == ""){
    erro("#erro-login")
  }
}




