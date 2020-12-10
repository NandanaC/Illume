var express = require('express');
var app = express();

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

async function updateDatabase(blogid, title, desc, content, category, user_id) {
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("BlogDb");
        var blogDetails = { BlogID: blogid, title: title, desc: desc, content: content, category: category };
        dbo.collection("Blog").insertOne(blogDetails, function (err, res) {
            if (err) throw err;
            console.log("1 blog document inserted");
        });
        var userDetails = { BlogID: blogid, UserID: user_id };
        dbo.collection("BlogAuthor").insertOne(userDetails, function (err, res) {
            if (err) throw err;
            console.log("1 user document inserted");
            db.close();
        });
    });
}

function generateBlogId() {
    const dayDict = { 0: 'Sunday', 1: 'Monday', 2: 'Tuesday', 3: 'Wednesday', 4: 'Thrusday', 5: 'Friday', 6: 'Saturday' }
    const monthDict = { 0: 'Jan', 1: 'Feb', 11: 'December' }
    const dateObj = new Date();
    const day = '' + dayDict[dateObj.getDay()];
    const month = '' + monthDict[dateObj.getMonth()];
    const year = '' + dateObj.getFullYear();
    var date = '' + dateObj.getDate();
    date = date.length < 2 ? '0' + date : date;
    var hr = '' + dateObj.getHours();
    hr = hr.length < 2 ? '0' + hr : hr;
    var min = '' + dateObj.getMinutes();
    min = min.length < 2 ? '0' + min : min;
    const time = hr + ':' + min;
    var blogId = day.slice(0, 3) + month.slice(0, 3) + year + date + time;
    return blogId;
}

app.post('/', async function (req, res, next) {
    const blogId = generateBlogId();
    const title = req.body.title;
    const desc = req.body.desc;
    const content = req.body.content;
    const category = req.body.category;
    const userId = req.body.uid;

    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000/new-blog')
    if (userId == '')
        res.send('User not logged in...Unable to update database');
    else {
        await updateDatabase(blogId, title, desc, content, category, userId);
        res.send('Successfully updated Database!!');
    }
});

module.exports = app;