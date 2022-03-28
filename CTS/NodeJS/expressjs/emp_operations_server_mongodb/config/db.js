var MongoClient = require('mongodb').MongoClient;

let url = 'mongodb://localhost:27017';

var mongoClient = new MongoClient(url);

module.exports = mongoClient;