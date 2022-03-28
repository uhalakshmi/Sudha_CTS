var mongoDriver = require('mongodb');
var mongoClient = mongoDriver.MongoClient;

let url = 'mongodb://localhost:27017/'

mongoClient.connect(url, function (err, dbConn) {
    if (err) throw err;
    var db = dbConn.db("admin");
    let records = [{ empno: 102, ename: "Sunil", email: "sunil@gmail.com", sal: 36000 },
        { empno: 103, ename: "Vijay", email: "vijay@gmail.com", sal: 38000 },
        { empno: 104, ename: "Ajay", email: "ajay@gmail.com", sal: 32000 },
        { empno: 105, ename: "Vimal", email: "vimal@gmail.com", sal: 34000 }
    ]
    db.collection("emps").insertMany(records, function (err, result) {
        console.log(err);
        console.log(result);
        dbConn.close();
    });
});

