"use strict";
class InputValidator{
    constructor(element, maxLength, minLength){
        var self = this;
        this.element = element;
        this.maxLength = maxLength;
        this.minLength = minLength || 0;
    }
    validate(){}
    
    validateRequired(){
        if (this.element.value === null || this.element.value === "") {
            errorEvent(element);
            return false;
        }    
        return true;
    }
    
    validateEqual(elementB){
       if (this.element.value !== elementb.value) {
            errorEvent(this.elementa);
            errorEvent(elementb);
        } 
    }
        
    validateFormat(regex){
        if (this.element.value.match(regex)) {
            errorEvent(this.element);
            return false;
        }
    }
        
    validateMaxLength(){
        console.log(this.element.value);
     
    }
        
    validateMinLength(){
        if (this.element.value.length < this.maxlength) {
            errorEvent(this.element);
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

        super.validateMaxLength();   
    }
  
}

var form = document.getElementsByClassName("register-form")[0];
//var firstname = new TextValidator(form.elements.firstname, 4, 4);
//firstname.element.addEventListener("onblur", func, true);
var firstname = new TextValidator(form.elements.firstname, 4, 4);
firstname.validate();

firstname.element.addEventListener("blur", function(){
    firstname.validate();
}, true);


