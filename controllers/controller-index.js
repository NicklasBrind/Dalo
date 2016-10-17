const wrap = require('co-express');
const Promise = require('bluebird');
const Navigation = require('../modules/Navigation');
const news = require('../modules/news-module');



function index(router){
    router.get('/', wrap(function *(request, response){
        const nav = new Navigation({admin: true});
        const facebookPage = 'datalogiforeningen';
        try{
            let menu =  nav.getLoginNavigation();
            //let localNews =  news.localNews();
            let posts = news.getFacebookPagePosts(facebookPage);
            let picture = news.getFacebookPagePicture(facebookPage);
            let result = yield [menu, posts, picture];
            
            console.log(result[0]);

            
            return response.render('index', {
                title : 'Dalo - News',
                news : [],
                facebook : {
                    picture : result[2],
                    posts : result[1],
                    name : facebookPage
                },
                loginNav : result[0]
            });
        }catch(error){
            console.log(error);
        }
    }));
    return router;
}


module.exports = index;