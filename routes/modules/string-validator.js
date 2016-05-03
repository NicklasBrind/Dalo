"use strict";

class StringValidator {
    constructor(string) {
        this.string = string;
        this.rules = [];
    }
    setString(string){
        this.string = string
    }
    getString() {
        return this.string;
    }
    
    addRule(Rule) {
        this.rules.push(Rule);
    }
    
    validate() {
        for (var i = 0; i < this.rules.length; i++) {
            if (!this.rules[i].check(this.string)) {
                return false;
            }
        }
        return true;
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

module.exports = {
    StringValidator: StringValidator,
    RuleRequired: RuleRequired,
    RuleMaxLength: RuleMaxLength,
    RuleMinLength: RuleMinLength,
    RuleRegex: RuleRegex,
    RuleEqual: RuleEqual
}