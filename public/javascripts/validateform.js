
var submit = document.getElementById('submit');
submit.addEventListener('click', validateForm, true);

// Get form element
var form = document.getElementsByClassName("register-form")[0];

// Form elements
var github = form.elements.github;
var linkedin = form.elements.linkedin;
var facebook = form.elements.facebook;
var phonenumber = form.elements.phonenumber;
var country = form.elements.country;
var city = form.elements.city;
var zipcode = form.elements.zipcode;
var street = form.elements.street;
var examdate  = form.elements.examdate;
var startdate = form.elements.startdate;
var program = form.elements.password;
var password = form.elements.password;
var validpassword = form.elements.validpassword;
var email = form.elements.email;
email.addEventListener('onBlur', validateEmail, true);

var ssn = form.elements.ssn;
var nickname = form.elements.nickname;
var lastname = form.elements.lastname;
var firstname = form.elements.firstname;

function validateEmail(email, emailRegex) {
    validateRequired(email);
    validateFormat(email, emailRegex);
}

function validateForm(e) {
    e.preventDefault();
    
    
    // Options
    var maxLength = 45;
    var passwordMinLength = 10;
    var zipcodeMaxLength = 11;
    var phoneNumberMaxLength = 11;
    var ssnRegex = "^[12]{1}[90]{1}[0-9]{6}-[0-9]{4}$";
    var emailRegex = "^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,6}$";
    
    // Firstname
    validateRequired(firstname);
    validateMaxLength(firstname, maxLength);
    
    // Lastname
    validateRequired(lastname);
    validateMaxLength(lastname, maxLength);
    
    // Nickname
    validateRequired(nickname);
    validateMaxLength(nickname, maxLength);

    // SSN
    validateRequired(ssn);
    validateMaxLength(ssn, 12);
    validateFormat(ssn, ssnRegex);
    
    // Email
    validateRequired(email);
    validateFormat(email, emailRegex);
    
    // Password/validpassword
    validateMinLength(password, passwordMinLength);
    validateEqual(password, validpassword);
    
    // Program 
    validateRequired(program);
    
    // Start date
    validateRequired(startdate);
    
    // Exam date
    
    // Street
    validateRequired(street);
    validateMaxLength(street, maxLength);
    
    // Zip code
    validateRequired(zipcode);
    validateMaxLength(zipcode, zipcodeMaxLength);
    
    // City
    validateRequired(city);
    
    // Country
    validateRequired(country);
    
    // Phonenumber
    validateMaxLength(phonenumber, phoneNumberMaxLength);
    
    // Facebook
    validateMaxLength(facebook, maxLength);
    
    // Linkedin
    validateMaxLength(linkedin, maxLength);
    
    // Github
    validateMaxLength(github, maxLength);
    
    
}

function validateEqual(elementa, elementb) {
    if (elementa.value !== elementb.value) {
        errorEvent(elementa);
        errorEvent(elementb);
    }
}

function validateFormat(element, regex) {
    if (element.value.match(regex)) {
        errorEvent(element);
        return false;
    }
}

function validateMaxLength(element, maxlength) {
    if (element.value.length > maxlength) {
        errorEvent(element);
        return false;
    }
}

function validateMinLength(element, maxlength) {
    if (element.value.length < maxlength) {
        errorEvent(element);
        return false;
    }
}

function validateRequired(element) {
    if (element.value === null || element.value === "") {
        errorEvent(element);
        return false;
    }
}

function errorEvent(element) {
    alert("hoppe");
}