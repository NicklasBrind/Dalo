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
        
        var firstname = new stringvalidator.StringValidator(request.body.firstname);
        firstname.addRule(new stringvalidator.RuleMaxLength(3));
        console.log(firstname.validate());
    });
    
    return router;
};