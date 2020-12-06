var express = require('express');
var app = express();
var fs = require('fs');

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

app.post('/', async function (req, res, next) {
    const blogId = 1;
    const title = req.body.title;
    const desc = req.body.desc;
    const content = req.body.content;
    const category = 'new';
    const userId = fs.readFileSync("./routes/userData.txt");

    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000')
    if (userId == '')
        res.send('User not logged in...Unable to update database');
    else {
        await updateDatabase(blogId, title, desc, content, category, userId);
        res.send('Successfully updated Database!!');
    }
});


module.exports = app;