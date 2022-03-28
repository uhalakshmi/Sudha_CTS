var express = require('express');
var cors = require("cors");
var mongoClient = require('./config/db');

var app = express();
app.use(cors());
app.use(express.json());
mongoClient.connect(function (err, result) {
    if (err) {
        console.log("Getting Erro while connection ti db");
        throw err;
    }
    if (!err) {
        console.log("DB is connected successfully");
    }
});
app.get("/", function (req, res) {
    console.log("some thing");
    res.send("Welcome to my Home page.")
})
app.use(require('./routes/employees_routes'));
const PORT = 5005;
app.listen(PORT, function (err, res) {
    if (err) throw err;
    console.log(`Application is started successfull and running on port: ${PORT}`);
});




