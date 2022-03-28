var mongoDriver = require('mongodb');
var mongoClient = mongoDriver.MongoClient;

let url = 'mongodb://localhost:27017/'

mongoClient.connect(url, function (err, dbConn) {
    if (err) throw err;
    var db = dbConn.db("admin");
    let query = { empno: 101 };
    let newSal = { $set: { sal: 45000 } };
    db.collection("emps").updateOne(query, newSal, function (err, result) {
        console.log(result);
        dbConn.close();
    });
});

