var express = require('express');
var app = express();
app.use(express.json());
app.get("/", function (req, res) {
    let { body, params, query } = req;
    // console.log(req);
    console.log("path: ", req.url);
    console.log("params: ", params);
    console.log("body: ", body);
    console.log("query: ", query);
    res.send("Welcome to my home page.");
})
// working with query string 
app.get("/employees", function (req, res) {
    let { body, params, query } = req;
    // console.log(req);
    console.log("path: ", req.url);
    console.log("params: ", params);
    console.log("body: ", body);
    console.log("query: ", query);
    res.send("Hello employees, " +query.ename);
})
// working with query string 
app.get("/users", function (req, res) {
    let { body, params, query } = req;
    // console.log(req);
    console.log("path: ", req.url);
    console.log("params: ", params);
    console.log("body: ", body);
    console.log("query: ", query);
    res.send("Hello Users, " + query.uname);
})
// working with params
app.get("/employees/:eid/:ename/:pid", function (req, res) {
    let { body, params, query } = req;
    // console.log(req);
    console.log("path: ", req.url);
    console.log("params: ", params);
    console.log("body: ", body);
    console.log("query: ", query);
    res.send("Hello employees, " +params.ename);
})
// working with params
app.get("/users/:uid/:uname/:pid", function (req, res) {
    let { body, params, query } = req;
    // console.log(req);
    console.log("path: ", req.url);
    console.log("params: ", params);
    console.log("body: ", body);
    console.log("query: ", query);
    res.send("Hello Users, " + params.uname);
})
// working with post request
app.post("/employees", function (req, res) {
    let { body, params, query } = req;
    // console.log(req);
    console.log("path: ", req.url);
    console.log("params: ", params);
    console.log("body: ", body);
    console.log("query: ", query);
    res.send("Hello employees, " +body.ename);
})
// working with post request
app.post("/users", function (req, res) {
    let { body, params, query } = req;
    // console.log(req);
    console.log("path: ", req.url);
    console.log("params: ", params);
    console.log("body: ", body);
    console.log("query: ", query);
    res.send("Hello Users, " + body.uname);
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, function (err, res) {
    if (err) throw err;
    console.log(`Application is started successfully and running ${PORT}...`);
})