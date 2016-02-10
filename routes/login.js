module.exports = function(router){

    router.get('/login', function(request, response, next){
        response.render('index', { title: 'Dalo', msg : "Här loggar man  yo"});
    });

    return router;
}