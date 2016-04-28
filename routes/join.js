var navigation = require('./modules/navigation-module');
var stringvalidator = require('./modules/string-validator');

module.exports = function(router, app){
    
    router.get('/join', function(request, response, next){
        // Get client
        var client = app.get('client');
        return response.render('join', { title: 'Join - Dalo',});
    });
    
    router.post('/join', function(request, response, next) {
       // Get client
        var client = app.get('client');
        
        var data = [];
        
        var firstname = new stringvalidator.StringValidator(request.body.firstname);
        firstname.addRule(new stringvalidator.RuleMaxLength(3));
        data.push(firstname);
        
        var lastname = new stringvalidator.StringValidator(request.body.lastname);
        
        var nickname = new stringvalidator.StringValidator(request.body.nickname);
        
        var ssn = new stringvalidator.StringValidator(request.body.ssn);
        
        var email = new stringvalidator.StringValidator(request.body.email);
        
        var password = new stringvalidator.StringValidator(request.body.password);
        
        var password = new stringvalidator.StringValidator(request.body.validpassword);
        
        var program = new stringvalidator.StringValidator(request.body.program);
        
        var startyear = new stringvalidator.StringValidator(request.body.startyear);
        
        var examyear = new stringvalidator.StringValidator(request.body.examyear);
        
        var street = new stringvalidator.StringValidator(request.body.street);
        
        var zipcode = new stringvalidator.StringValidator(request.body.zipcode);
        
        var city = new stringvalidator.StringValidator(request.body.city);
        
        var country = new stringvalidator.StringValidator(request.body.country);
        
        var phonenumber = new stringvalidator.StringValidator(request.body.phonenumber);
        
        var facebook = new stringvalidator.StringValidator(request.body.facebook);
        
        var linkedin = new stringvalidator.StringValidator(request.body.linkedin);
        
        var github = new stringvalidator.StringValidator(request.body.github);
        
    });
    
    return router;
};