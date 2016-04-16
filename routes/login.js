var navigation = require('./modules/navigation-module');

module.exports = function(router, app){

    router.get('/login', function(request, response, next){
        // Get client
        var client = app.get('client');
        return response.render('login', { title: 'Login - Dalo',});
    });
    
    return router;
}