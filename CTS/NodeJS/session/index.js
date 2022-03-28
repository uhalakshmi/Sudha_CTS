// imports
var express = require("express");
var cookieParser = require('cookie-parser')
var session = require('express-session');




var app = express();



app.use(express.json());
app.use(cookieParser())
app.use(session({
    secret: 'nothing'
}));



// routes
app.use(require("./routes"));
  


// listen registrations
app.listen(5005, function (err) {
    if (err) {
        console.log("Error occured while starting application");
        console.log(err);
    }
    if (!err) {
        console.log("Application is started successfully and running on port: 5005");
    }
})