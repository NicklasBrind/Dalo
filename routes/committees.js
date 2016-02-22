module.exports = function(router){


    router.get('/committees', function(request, response, next){
       return response.render('committees', { title: 'Dalo', msg : "Här loggar man  yo"});
    });
    

    return router;
}