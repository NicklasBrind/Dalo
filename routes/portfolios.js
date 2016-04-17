var navigation = require('./modules/navigation-module');

module.exports = function(router, app){
    router.get('/portfolios', function(request, response, next){
        // Get client
        var client = app.get('client');
        navigation.getLoginNavigation(client, function(err, results) {
            // Render page and send data
            return response.render('portfolios', {
                title: 'Portfolios - Dalo',
                login_nav: results
            });
        });    
    });
    return router;
};