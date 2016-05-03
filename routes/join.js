var navigation = require('./modules/navigation-module');
var validator = require('./modules/string-validator');

function basicRules(item, max){
    item.addRule(new validator.RuleMaxLength(max));
    item.addRule(new validator.RuleRequired());
}

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

module.exports = function(router, app){
    
    router.get('/join', function(request, response, next){
        // Get client
        var client = app.get('client');
        return response.render('join', { title: 'Join - Dalo',});
    });
    
    router.post('/join', function(request, response, next) {
       // Get client
        var client = app.get('client');
       
        var isValid = true;
        // Query variables
        var data = [];
        
        var username = request.body.username;
        var password = request.body.password;
        
        data.push(new validator.StringValidator(username));
        basicRules(data[0], config.maxLength);
        
        data.push(new validator.StringValidator(password));
        basicRules(data[1], config.maxLength);
        data[1].addRule(new validator.RuleMinLength(config.passwordMinLength));
        
        for (var i = 0; i < data.length; i++) {
            if (!data[i].validate()) {
                console.log(data[i].getString() + " failed validation. ");
                return response.render("join", {title : "join - Dalo", error : data[i].getString() + " failed validation."});
            }
        }
        
        client.query("call sp_add_user(?, ?)", [username, password], function(err, rows, fields){
            if(err){
                return console.log(err);
            }
            console.log("User created");
            return response.redirect("/");
        });
    
    });
    return router;  
}
        

 
       