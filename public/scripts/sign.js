var login = document.getElementsByClassName("login-form");
login = login[0];

var loginLink = login.lastChild;

var reg = document.getElementsByClassName("register-form");
reg = reg[0];

var regLink = reg.lastChild;


loginLink.addEventListener("click", function(e){
    e.preventDefault();
    login.style.display = "none";
    reg.style.display = "block";
}, false);


regLink.addEventListener("click", function(e){
    e.preventDefault();
    
    reg.style.display = "none";
    login.style.display = "block";
}, false)