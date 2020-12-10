var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

exports.getAllBlogs = async function (callback) {
    MongoClient.connect(url, async function (err, db) {
        if (err) throw err;
        var dbo = db.db("BlogDb");
        dbo.collection("Blog").find({}).toArray(
            function (err, result) {
                if (err) throw err;
                db.close()
                callback(result);
            });
    })
};

exports.getBlog = async function (query, callback) {
    console.log(query);
    MongoClient.connect(url, async function (err, db) {
        if (err) throw err;
        var dbo = db.db("BlogDb");
        dbo.collection("Blog").find(query).toArray(
            function (err, result) {
                if (err) throw err;
                db.close()
                callback(result);
            });
    })
};

exports.getUserBlogID = async function (query, callback) {
    console.log(query);
    MongoClient.connect(url, async function (err, db) {
        if (err) throw err;
        var dbo = db.db("BlogDb");
        dbo.collection("BlogAuthor").find(query).toArray(
            function (err, result) {
                if (err) throw err;
                db.close()
                callback(result);
            });
    })
};