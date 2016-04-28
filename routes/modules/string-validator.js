"use strict";

class StringValidator {
    constructor(string) {
        this.string = string;
        this.rules = [];
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
    RuleMaxLength: RuleMaxLength,
    RuleMineLength: RuleMinLength,
    RuleRegex: RuleRegex,
    RuleEqual: RuleEqual
}