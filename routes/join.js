var navigation = require('./modules/navigation-module');
var validator = require('./modules/string-validator');

module.exports = function(router, app){
    
    router.get('/join', function(request, response, next){
        // Get client
        var client = app.get('client');
        return response.render('join', { title: 'Join - Dalo',});
    });
    
    router.post('/join', function(request, response, next) {
       // Get client
        var client = app.get('client');
        
        // Query variables
        var data = [];
        var isValidated = true;
        
        // Config variables
        // TODO: Separate from this file
        var stringMaxLength = 45;
        var ssnMaxLength = 13;
        var passwordMinLength = 10;
        var phoneNumberMaxLength = 11;
        var zipcodeMaxLength = 11;
        var ssnRegex = "^[12]{1}[90]{1}[0-9]{6}-[0-9]{4}$";
        var emailRegex = "^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,6}$";
        
        var firstname = new validator.StringValidator(request.body.firstname);
        firstname.addRule(new validator.RuleMaxLength(stringMaxLength));
        firstname.addRule(new validator.RuleRequired());
        data.push(firstname);
        
        var lastname = new validator.StringValidator(request.body.lastname);
        lastname.addRule(new validator.RuleMaxLength(stringMaxLength));
        lastname.addRule(new validator.RuleRequired());
        data.push(lastname);
        
        var nickname = new validator.StringValidator(request.body.nickname);
        nickname.addRule(new validator.RuleMaxLength(stringMaxLength));
        data.push(nickname);
        
        var ssn = new validator.StringValidator(request.body.ssn);
        ssn.addRule(new validator.RuleMaxLength(ssnMaxLength));
        ssn.addRule(new validator.RuleRegex(ssnRegex));
        ssn.addRule(new validator.RuleRequired());
        data.push(ssn);
        
        var email = new validator.StringValidator(request.body.email);
        email.addRule(new validator.RuleMaxLength(stringMaxLength));
        email.addRule(new validator.RuleRegex(emailRegex));
        email.addRule(new validator.RuleRequired());
        data.push(email);
        
        var password = new validator.StringValidator(request.body.password);
        password.addRule(new validator.RuleMaxLength(stringMaxLength));
        password.addRule(new validator.RuleMinLength(passwordMinLength));
        password.addRule(new validator.RuleRequired());
        data.push(password);
        
        var validpassword = new validator.StringValidator(request.body.validpassword);
        validpassword.addRule(new validator.RuleEqual(request.body.password));
        validpassword.addRule(new validator.RuleRequired());
        data.push(validpassword);
        
        var program = new validator.StringValidator(request.body.program);
        //program.addRule(new validator.RuleRequired());
        data.push(program);
        
        var startyear = new validator.StringValidator(request.body.startyear);
        startyear.addRule(new validator.RuleRequired());
        data.push(startyear);
        
        var examyear = new validator.StringValidator(request.body.examyear);
        data.push(examyear);
        
        var street = new validator.StringValidator(request.body.street);
        street.addRule(new validator.RuleMaxLength(stringMaxLength));
        street.addRule(new validator.RuleRequired());
        data.push(street);
        
        var zipcode = new validator.StringValidator(request.body.zipcode);
        zipcode.addRule(new validator.RuleMaxLength(zipcodeMaxLength));
        zipcode.addRule(new validator.RuleRequired());
        data.push(zipcode);
        
        var city = new validator.StringValidator(request.body.city);
        city.addRule(new validator.RuleMaxLength(stringMaxLength));
        city.addRule(new validator.RuleRequired());
        data.push(city);
        
        var country = new validator.StringValidator(request.body.country);
        country.addRule(new validator.RuleMaxLength(stringMaxLength));
        country.addRule(new validator.RuleRequired());
        data.push(country);
        
        var phonenumber = new validator.StringValidator(request.body.phonenumber);
        phonenumber.addRule(new validator.RuleMaxLength(phoneNumberMaxLength));
        data.push(phonenumber);
        
        var facebook = new validator.StringValidator(request.body.facebook);
        facebook.addRule(new validator.RuleMaxLength(stringMaxLength));
        data.push(facebook);
        
        var linkedin = new validator.StringValidator(request.body.linkedin);
        linkedin.addRule(new validator.RuleMaxLength(stringMaxLength));
        data.push(linkedin);
        
        var github = new validator.StringValidator(request.body.github);
        github.addRule(new validator.RuleMaxLength(stringMaxLength));
        data.push(github);
        
        for (var i = 0; i < data.length; i++) {
            if (!data[i].validate()) {
                isValidated = false;
                console.log(data[i].getString() + " failed validation. ");
            }
        }
        
        if (isValidated) {
            console.log("Validated successfully.")
        } else {
            console.log("Validation failed. ");
        }
        
    });
    
    return router;
};