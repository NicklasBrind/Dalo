var Auth = require("./modules/auth-module");

module.exports = function (router, app) {
    
    router.get('/login', function (request, response, next) {
        return response.render('login', { title: 'Login - Dalo', });
    });
    
    router.post("/login", function (request, response, next) {
        var auth = new Auth(app.set("client"));
        return auth.login(request, response, next);
    });
    
    return router;
};