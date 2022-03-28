var mongoDriver = require('mongodb');
var mongoClient = mongoDriver.MongoClient;

let url = 'mongodb://localhost:27017/'

mongoClient.connect(url, function (err, dbConn) {
    if (err) throw err;
    var db = dbConn.db("admin");
    let query = { empno: { $in: [102, 103, 104, 105] } };
    let newSal = { $set: { sal: 35000 } };
    db.collection("emps").updateMany(query, newSal, function (err, result) {
        console.log(result);
        dbConn.close();
    });
});

