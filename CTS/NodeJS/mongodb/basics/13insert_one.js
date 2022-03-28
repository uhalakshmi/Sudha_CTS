var mongoDriver = require('mongodb');
var mongoClient = mongoDriver.MongoClient;

let url = 'mongodb://localhost:27017/'

mongoClient.connect(url, function (err, dbConn) {
    if (err) throw err;
    var db = dbConn.db("admin");
    let record = { empno: 101, ename: "Anil", email: "anil@gmail.com", sal: 35000 };
    db.collection("emps").insertOne(record, function (err, result) {
        console.log(result);
        dbConn.close();
    });
});

