module.exports = function(router){

    
    router.get('/calendar', function(request, response, next){
        return response.render('calendar', { title: 'Dalo', msg : "Här loggar man  yo"});
    });
    
   

    
    
    

    return router;
}