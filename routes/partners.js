module.exports = function(router){

    
    router.get('/partners', function(request, response, next){
        return response.render('partners', { title: 'Dalo', msg : "Här loggar man  yo"});
    });
    
    return router;
}