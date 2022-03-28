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

process.on('uncaughtException', err => {
    console.error('There was an uncaught error', err)
    process.exit(1) //mandatory (as per the Node.js docs)
})
  
// 1)cookies 
// 2) session 
// 3) switching between login and lotout menus 
// 4)jwt token(aut)
// 5)uncought error

