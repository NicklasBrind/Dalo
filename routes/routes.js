module.exports = function(router){

    router.get('/', function(request, response, next){
        response.render('index', { title: 'Dalo', msg : "Välkommen till DALO hemsidan"});
    });
    
    router.get('/login', function(request, response, next){
        response.render('login', { title: 'Dalo', msg : "Här loggar man  yo"});
    });
    
    router.get('/calendar', function(request, response, next){
        response.render('calendar', { title: 'Dalo', msg : "Här loggar man  yo"});
    });
    
    router.get('/partners', function(request, response, next){
        response.render('partners', { title: 'Dalo', msg : "Här loggar man  yo"});
    });
    
    router.get('/about', function(request, response, next){
        response.render('about', { title: 'Dalo', msg : "Här loggar man  yo"});
    });
    
    router.get('/join', function(request, response, next){
        response.render('join', { title: 'Dalo', msg : "Här loggar man  yo"});
    });
    
    router.get('/statutes', function(request, response, next){
        response.render('statutes', { title: 'Dalo', msg : "Här loggar man  yo"});
    });
    
    router.get('/board', function(request, response, next){
        response.render('board', { title: 'Dalo', msg : "Här loggar man  yo"});
    });
    
    router.get('/committees', function(request, response, next){
        response.render('committees', { title: 'Dalo', msg : "Här loggar man  yo"});
    });
    
    router.get('/portfolios', function(request, response, next){
        response.render('portfolios', { title: 'Dalo', msg : "Här loggar man  yo"});
    });
    
    router.get('/join', function(request, response, next){
        response.render('join', { title: 'Dalo', msg : "Här loggar man  yo"});
    });

    router.get('/rookieperiod', function(request, response, next){
        response.render('rookieperiod', { title: 'Dalo', msg : "Här loggar man  yo"});
    });
    
    router.get('/rookie_about', function(request, response, next){
        response.render('rookie_about', { title: 'Dalo', msg : "Här loggar man  yo"});
    });
    

    return router;
}