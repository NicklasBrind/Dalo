var navigation = require('./modules/navigation-module');

module.exports = function(router, app){
    
    router.get('/join', function(request, response, next){
        // Get client
        var client = app.get('client');
        return response.render('join', { title: 'Join - Dalo',});
    });
    
    return router;
};