/*
    2016, Maxim Degtyarev


    Connection to database

 */

//PG
var pgp = require('pg-promise')();

var url = process.env.DB_URL;
var db = pgp(url);

module.exports = db;
