"use strict";

class ElementValidator {
    constructor(element) {
        this.element = element;
        this.rules = [];
    }
    setElement(element){
        this.element = element
    }
    
    ElementValidator() {
        return this.element;
    }
    
    addRule(Rule) {
        this.rules.push(Rule);
    }
    
    validate() {
        for (var i = 0; i < this.rules.length; i++) {
            if (!this.rules[i].check(this.element.value)) {
                return false;
            }
        }
        return true;
    }
    
    lisen(){
        this.element.addEventListener("blur", function(){
            this.validate();
        }, true);
    }
}

class Rule {
    constructor() {
      if (this.constructor === Rule) throw new Error("Cannot instantiate Rule class.");
    }
    check(string) { }
}

class RuleRequired extends Rule {
    constructor() {
        super();
    }
    
    check(string) {
        return !(string === '' || string === null)
    }
}

class RuleMaxLength extends Rule {
    constructor(maxLength) {
        super();
        this.maxLength = maxLength;
    }
    
    check(string) {
         return !(string.length > this.maxLength);
    }
}

class RuleMinLength extends Rule {
    constructor(minLength) {
        super();
        this.minLength = minLength;
    }
    
    check(string) {
         return !(string.length < this.minLength);
    }
}

class RuleRegex extends Rule {
    constructor(regex) {
        super();
        this.regex = regex;
    }
    check (string) {
        return string.match(this.regex);
    }
}

class RuleEqual extends Rule {
    constructor (string) {
        super();
        this.string = string;
    }
    check (string) {
        return string === this.string;
    }
}

function clone(obj) {
    var copy;

    // Handle the 3 simple types, and null or undefined
    if (null === obj || "object" !== typeof obj) return obj;

    // Handle Date
    if (obj instanceof Date) {
        copy = new Date();
        copy.setTime(obj.getTime());
        return copy;
    }

    // Handle Array
    if (obj instanceof Array) {
        copy = [];
        for (var i = 0, len = obj.length; i < len; i++) {
            copy[i] = clone(obj[i]);
        }
        return copy;
    }

    // Handle Object
    if (obj instanceof Object) {
        copy = {};
        for (var attr in obj) {
            if (obj.hasOwnProperty(attr)) copy[attr] = clone(obj[attr]);
        }
        return copy;
    }

    throw new Error("Unable to copy obj! Its type isn't supported.");
}
var stringMaxLength = 45;
var ssnMaxLength = 13;
var passwordMinLength = 10;
var phoneNumberMaxLength = 11;
var zipcodeMaxLength = 11;
var ssnRegex = "^[12]{1}[90]{1}[0-9]{6}-[0-9]{4}$";
var emailRegex = "^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,6}$";

var form = document.getElementsByClassName("register-form")[0];


var generalString = new ElementValidator(null);
generalString.addRule(new RuleRequired());
generalString.addRule(new RuleMaxLength(stringMaxLength));

var firstname = (JSON.parse(JSON.stringify(generalString)));
console.log(firstname);
firstname.setElement(form.elemnts.firstname);
