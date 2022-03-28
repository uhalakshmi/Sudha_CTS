var mongoDriver = require('mongodb');
var mongoClient = mongoDriver.MongoClient;

let url = 'mongodb://localhost:27017/'

mongoClient.connect(url, function (err, dbConn) {
    if (err) throw err;
    var db = dbConn.db("admin");
    let query = { empno: 101 };
    
    db.collection("emps").deleteOne(query, function (err, result) {
        console.log(result);
        dbConn.close();
    });
});

