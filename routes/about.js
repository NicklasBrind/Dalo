module.exports = function(router){
    
    router.get('/about', function(request, response, next){
       return response.render('about', { title: 'Dalo', msg : "Här loggar man  yo"});
    });
    
    return router;
}