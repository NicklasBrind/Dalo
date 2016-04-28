"use strict";

class InputValidator{
    constructor(element, maxLength, minLength){
        var self = this;
        this.element = element;
        this.maxLength = maxLength;
        this.minLength = minLength || 0;
    }
    validate(){}
    
    eventListener(){}
    
    validateRequired(){
        if (this.element.value === null || this.element.value === "") {
            this.errorEvent(element);
            return false;
        }    
        return true;
    }
    
    validateEqual(elementB){
       if (this.element.value !== elementb.value) {
            this.errorEvent(this.elementa);
            this.errorEvent(elementb);
        } 
    }
        
    validateFormat(regex){
        if (this.element.value.match(regex)) {
            this.errorEvent(this.element);
            return false;
        }
    }
        
    validateMaxLength(){
        console.log(this.element.value);
        if(this.element.value.length > this.maxLength){
            this.errorEvent();
            return false;
        }
     
    }
        
    validateMinLength(){
        if (this.element.value.length < this.maxlength) {
            this.errorEvent(this.element);
            return false;
        }
    }
        
    errorEvent(){
        alert("error");
    }
    
}

class TextValidator extends InputValidator{
    constructor(element, maxLength, minLength){
        super(element, maxLength, minLength);
    }
    validate(){
        super.validateRequired();
        super.validateMaxLength();   
    }
    listen(){
        var self = this;
        this.element.addEventListener("blur", function(){
            self.validate();
        }, true)
    }
  
}

class SsnValidator extends InputValidator{
    
    constructor(element, maxLength, minLength){
        super(element, maxLength, minLength);
    }
    
    validate(){
        super.validateRequired();
        super.validateFormat(config.ssnRegex);
    }
    listen(){
        var self = this;
        this.element.addEventListener("blur", function(){
            self.validate();
        }, true)
    }
}
}

class EmailValidator extends InputValidator{
    constructor(element, maxLength, minLength){
        super(element, maxLength, minLength);
    }
    validate(){
        super.validateRequired();
        super.validateMaxLength();
        super.validateFormat(config.emailRegex);
    }
    listen(){
        var self = this;
        this.element.addEventListener("blur", function(){
            self.validate();
        }, true)
    }
}


var config ={
    maxLength : 45,
    minLength : 0,
    passwordMinLength : 10,
    zipcodeMaxLength : 11,
    phoneNumberMaxLength : 11,
    ssnRegex : "^[12]{1}[90]{1}[0-9]{6}-[0-9]{4}$",
    emailRegex : "^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,6}$"
}

var form = document.getElementsByClassName("register-form")[0];


var firstname = new TextValidator(form.elements.firstname, config.maxLength, config.minLength);
var lastname = new TextValidator(form.elements.lastname, config.maxLength, config.minLength);
var nickname = new textValidator(form.elements.lastname, config.maxLength, config.minLength);
var ssn = new SsnValidator(form.elemnts.ssn, config.maxLength, config.minLength);
var email = new EmailValidator(form.elements.email, config.maxLength, config.minLength);

var validatorArray = [firstname, lastname, nickname, ssn, email]

for(var i = 0; i < validatorArray.length; i++){
    validatorArray[i].listen;
}