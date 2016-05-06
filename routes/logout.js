var Auth = require("./modules/auth-module");

module.exports = function(router, app){
    var auth = new Auth();
    router.get('/logout', auth.logout);
    
    return router;
};