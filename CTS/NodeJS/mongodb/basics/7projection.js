var mongodbDriver = require("mongodb");
var mongoClient = mongodbDriver.MongoClient;
let url = 'mongodb://localhost:27017/';
mongoClient.connect(url, function (err, dbCon) {
    if (err) throw err;
    var db = dbCon.db("admin");
    db.collection("emps").find({}, { projection: { _id: 0 } }).sort({sal: -1}).toArray(function (err, result) {
        if (err) throw err;

        console.log(result);
        console.log(result.length);

        dbCon.close();
    })
})