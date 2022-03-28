var express = require("express");
var cookieParser = require('cookie-parser')

var app = express();
app.use(express.json());
app.use(cookieParser())
app.get("/", function (req, res) {
    const { body, params, query, file, files, header } = req;
    
   
    res.cookie("user_name", "ramu") 
    res.cookie("email", "ramu@gail.com") 
    res.cookie("age", "45") 
    res.cookie("mobile", "7788554499") 
    res.send("Welcome to my home page");
})
app.get("/hi", function (req, res) {
    const { body, params, query, file, files, headers, cookies } = req;
    console.log("cookies: ", cookies);
    res.send("Hi page");
})

app.get("/hello", function (req, res) {
    const { body, params, query, file, files, headers, cookies } = req;
    console.log("cookies: ", cookies);
    res.send("Hello page");
})

app.listen(5005, function (err) {
    if (err) {
        console.log("Error occured while starting application");
        console.log(err);
    }
    if (!err) {
        console.log("Application is started successfully and running on port: 5005");
    }
})