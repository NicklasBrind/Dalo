var navigation = require('./modules/navigation-module');

module.exports = function(router, app){
    
    router.get('/logout', function(request, response, next){
        // TODO: destroy session
       return response.redirect('/');
    });
    
    return router;
};