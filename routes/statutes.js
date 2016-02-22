module.exports = function(router){
    
    router.get('/statutes', function(request, response, next){
        return response.render('statutes', { title: 'Dalo', msg : "Här loggar man  yo"});
    });

    return router;
}