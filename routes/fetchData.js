var express = require('express');
var mongoData = require('./Mongo/getData')
var app = express();

app.get('/', async function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

    mongoData.getAllBlogs(function (data) {
        console.log('Data from callback is: ' + data);
        res.send(data);
    })
});

module.exports = app;   