var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

exports.getAllBlogs = async function (callback) {
    var result;
    MongoClient.connect(url, async function (err, db) {
        if (err) throw err;
        var dbo = db.db("BlogDb");
        dbo.collection("Blog").find({}).toArray(
            function (err, result) {
                if (err) throw err;
                console.log(result);
                data = result;
                console.log('Data is: ' + data);
                db.close()
                callback(result);
            });
    })
};