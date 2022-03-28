// var express = require('express');
var http = require('http');
var fs = require('fs');


var app = http.createServer(function (req, res) {
    if (req.url === "/") {
        res.write("Welcome to my home page");
        res.end();
    }
    if (req.url === "/download") {
        var rs = fs.createReadStream('sourceText.txt');
        rs.pipe(res);
        // res.write("hello wolrd, this demo of download");
        // res.end();
    }
})

app.listen(5005, function (err) {
    if (err) {
        console.log("Error occured while starting server");
        console.log(err);
    }
    if (!err) {
        console.log("Server is started successfully and running on port: 5005");
    }
})