var navigation = require('./modules/navigation-module');

module.exports = function(router, app){
    
    router.get('/board', function(request, response, next){
        // Get client
        var client = app.get('client');
        navigation.getLoginNavigation(client, function(err, results) {
            // Render page and send data
            return response.render('about', {
                title: 'About - Dalo',
                login_nav: results.navigation
            });
        });
    });
    
    return router;
}