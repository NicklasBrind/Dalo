module.exports = function(router){
    router.get('/portfolios', function(request, response, next){
        return response.render('portfolios', { title: 'Dalo', msg : "Här loggar man  yo"});
    });
    return router;
}