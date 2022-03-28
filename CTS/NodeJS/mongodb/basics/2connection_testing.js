var mongodbDriver = require('mongodb');
var mongoClient = mongodbDriver.MongoClient;

let url = 'mongodb://localhost:27017/'
mongoClient.connect(url, function (err, mongoCon) {
    if (err) throw err;
    console.log(mongoCon);
    mongoCon.close();
});