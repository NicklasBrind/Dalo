var navigation = require('./modules/navigation-module');

module.exports = function(router, app){    
    router.get('/calendar', function(request, response, next){
        // Get client
        var client = app.get('client');
        navigation.getLoginNavigation(client, function(err, results) {
            // Render page and send data
            return response.render('calendar', {
                title: 'Calendar - Dalo',
                login_nav: results.navigation
            });
        });    
    });
    return router;
}