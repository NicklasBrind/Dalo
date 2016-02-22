module.exports = function(router){

    router.get('/login', function(request, response, next){
        return response.render('login', { title: 'Dalo', msg : "Här loggar man  yo"});
    });
    
    return router;
}