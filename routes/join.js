var navigation = require('./modules/navigation-module');

module.exports = function(router, app){
    
    router.get('/join', function(request, response, next){
        // TODO: destroy session
       return response.redirect('/login');
    });
    
    return router;
};