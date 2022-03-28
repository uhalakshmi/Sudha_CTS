var mongoDriver = require('mongodb');
var mongoClient = mongoDriver.MongoClient;

let url = 'mongodb://localhost:27017/'

mongoClient.connect(url, function (err, dbConn) {
    if (err) throw err;
    var db = dbConn.db("admin");
    db.collection("emps").findOne({}, function (err, result) {
        console.log(result);
        dbConn.close();
    });
});