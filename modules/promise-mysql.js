"use strict";
const mysql = require('mysql');
const config = require('../config/database');

const pool  = mysql.createPool({
    connectionLimit : 10,
    host : config.connection.host,
    port : config.connection.port,
    user : config.connection.user,
    password : config.connection.password,
    database : config.connection.database
});


class Mysql{
    constructor(){
        this.pool = pool;
        this.client = undefined;
    }
    
    getConnection(){
        return new Promise((resolve, reject) => {
            this.pool.getConnection((error, connection) => {
                if(error) reject(error);
                resolve(connection);
            });
        });
    }
    /* Private method to evalute which connection to use
     * 
     *
     *
     *
     */
    _query(query, params, transaction){
        if(transaction){
            return this.queryTransaction(query, params);
        }else{
            return this.query(query, params);
        }
    }
    
    query(query, params){
        const self = this;
        return new Promise(function(resolve, reject){
            self.pool.query(query, params, function(error, rows){
                if(error) reject(error);
                resolve(rows);
            });
        });
    }
    
    queryTransaction(query, params){
        this.client.then(function(client){
            return new Promise(function(resolve, reject){
                client.query(query, params, function(error, rows){
                    if(error) reject(error);
                    resolve(rows);
                });
            });
        });
    }
    
    selectOne(query, params, transaction, errorMessage){
        return this._query(query, params, transaction).then(function(rows){
            if(rows) return rows[i];
            throw errorMessage;
        }).catch(function(error){
            throw error
        });
    }
    
    selectMulti(query, params, transaction, errorMessage){
        return this._query(query, params, transaction).then(function(rows){
            if(rows) return rows;
            throw errorMessage;
        }).catch(function(error){
            throw error
        });
    }
}

module.exports = Mysql;