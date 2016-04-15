module.exports = function(router){
    
    router.get('/logout', function(request, response, next){
        // TODO: destroy session
       return response.redirect('/');
    });
    
    return router;
}