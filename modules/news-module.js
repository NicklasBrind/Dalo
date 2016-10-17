"use strict";
const config = require('./../config/config');
const Promise = require('bluebird');
const Mysql = require('./../modules/promise-mysql');
const FB = require('fb');


FB.setAccessToken(config.FB.access);

class News{
    constructor(){
        
    }
    
    *localNews(){
        const mysql = new Mysql();
        let news = yield mysql.selectMulti('select * from view_fetch_news', [], false, 'Error: No news');
        console.log(news);
        let fetchedNews = [];
        
        for(let i = 0; i < news.length; i++){
            fetchedNews.push({
                title: news[i].title,
                content: news[i].content, 
                publisher: news[i].first_name, 
                date: news[i].post_date
            });
        }
        
        return yield Promise.resolve(fetchedNews);
    }
    
    getFacebookPagePosts(pagename){
        return new Promise(function(resolve, reject){
            FB.api('/' + pagename + '/posts', 'GET', {}, function(response){
                if(response && !response.error){
                    resolve(response);
                }else{
                    reject(response.error);
                }
            });  
        });
    }
    
    getFacebookPagePicture(pagename){
        const imagePath = 'https://graph.facebook.com/' + pagename + '/picture';
        return Promise.resolve(imagePath);
    }
}

module.exports = new News();