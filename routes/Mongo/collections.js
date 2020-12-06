/* var MongoClient = require('./create')
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("BlogDb");
    dbo.createCollection("Blog", function (err, res) {
        if (err) throw err;
        console.log("Collection created!");
        db.close();
    });
    dbo.createCollection("Blog_author", function (err, res) {
        if (err) throw err;
        console.log("Collection created!");
        db.close();
    });
});

module.exports =  MongoClient; */