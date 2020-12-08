var express = require('express');
var getData = require('./Mongo/getData')
var app = express();

app.get('/', async function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    getData.getAllBlogs(function (data) {
        console.log('Data from callback is: ');
        console.log(data);
        res.send({ array: data });
    })
});

app.post('/blog', async function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    var query = { BlogID: req.body.BlogID };
    getData.getOneBlog(query, function (data) {
        console.log('Data from query is: ');
        console.log(data[0]);
        res.send(data[0]);
    })
});

app.post('/category', async function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    var query = { category: req.body.category };
    getData.getOneBlog(query, function (data) {
        console.log('Data from query category is: ');
        console.log(data);
        res.send(data);
    })
});

module.exports = app;   