"use strict";
var config = {
    maxLength : 45,
    minLength : 0,
    ssnMaxLength : 13,
    passwordMinLength : 10,
    phoneNumberMaxLength : 11,
    zipcodeMaxLength : 11,
    ssnRegex : "^[12]{1}[90]{1}[0-9]{6}-[0-9]{4}$",
    emailRegex : "^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,6}$"
}

class Collection{
    constructor(){
        this.rules = [];
        this.param = [];
        this.valid;
    }
    addRule(callback, param){
        this.rules.push(callback);
   
        this.param.push(param);
    }
    validate(string){
        for(var i = 0; i < this.rules.length; i++){
            this.valid = this.rules[i](string, this.param[i]);
    
        }
    }
    
}

function maxLength(string, max){
    return (string.length < max) ? true : false;
}

function minLength(string, min){
    return (string.length > min) ? true : false;
}

function regexCheck(string, regex){
    return string.match(regex);
}

function equalCheck(string, string2){
    return (string === string2) ? true : false;
}
function requiredCheck(string, ignore){
    return !(string === '' || string === null);
}


var basic = new Collection();
basic.addRule(requiredCheck, "ignore");
basic.addRule(maxLength, config.maxLength);
basic.validate("hej")
console.log(basic.valid);