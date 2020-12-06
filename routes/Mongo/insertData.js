/* var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

function updateDatabase(blogid, title, blog, category, user_id) {
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("BlogDb");
        var blogDetails = { BlogID: blogid, title: title, blog: blog, category: category };
        dbo.collection("Blog").insertOne(blogDetails, function (err, res) {
            if (err) throw err;
            console.log("1 blog document inserted");
            db.close();
        });
        var userDetails = { BlogID: blogid, UserID: user_id };
        dbo.collection("BlogAuthor").insertOne(userDetails, function (err, res) {
            if (err) throw err;
            console.log("1 user document inserted");
            db.close();
        });
    });
}

module.exports = updateDatabase; */