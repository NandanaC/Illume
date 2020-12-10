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
    getData.getBlog(query, function (data) {
        console.log('Data from query is: ');
        console.log(data[0]);
        res.send(data[0]);
    })
});

app.post('/category', async function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    var query = { category: req.body.category };
    getData.getBlog(query, function (data) {
        console.log('Data from query category is: ');
        console.log(data);
        res.send(data);
    })
});

app.post('/user', async function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    var query = { UserID: req.body.UserID };
    var BlogID = [];
    var Blogs = [];
    getData.getUserBlogID(query, function (data) {
        BlogID = data;
        if (BlogID.length == 0) res.send('No blogs');
        else {
            BlogID.forEach(element => {
                query = { BlogID: element.BlogID };
                getData.getBlog(query, function (data) {
                    Blogs.push(data[0]);
                    console.log(Blogs);
                    if (Blogs.length == BlogID.length)
                        res.send(Blogs);
                });
            });
        }
    })
});

module.exports = app;   