var express = require('express');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var bodyParser = require('body-parser')

var app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json());
app.use(cookieParser());
app.use(session({
    secret: 'nothing',
}));
app.set("view engine", "ejs");
app.use(express.static("./resourcess"));


app.use(require("./rutes"))


app.listen(5005, function (err) {
    if (err) {
        console.log("Error occured while starting application");
        console.log(err);
    }
    if (!err) {
        console.log("Application is started successfully and running on port 5005");
    }
})

