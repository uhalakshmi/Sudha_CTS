// step 1
var express = require('express');

// step 2 
var app = express();
app.use(express.json());
// step 3 
// developping request handlers 
app.get("/", function (req, res) {
    res.send("Welcome to my home page")
})
app.get("/employees", function (req, res) {
    let { body, params, query } = req;
    console.log("body: ", body);
    console.log("params: ", params);
    console.log("query: ", query);
    res.send("Hello Employees.")
})
app.get("/users", function (req, res) {
    let { body, params, query } = req;
    console.log("body: ", body);
    console.log("params: ", params);
    console.log("query: ", query);
    res.send("Hello Users.");
});
// params demo
app.get("/employees/:eid/:ename/:pid", function (req, res) {
    let { body, params, query } = req;
    console.log("body: ", body);
    console.log("params: ", params);
    console.log("query: ", query);
    res.send("Hello Employee, " + params.ename);
});
app.get("/users/:uid/:uname/:pid", function (req, res) {
    let { body, params, query } = req;
    console.log("body: ", body);
    console.log("params: ", params);
    console.log("query: ", query);
    res.send("Hello Users, " + params.uname);
})
// working with post request to handle form data
app.post("/employees", function (req, res) {
    let { body, params, query } = req;
    console.log("body: ", body);
    console.log("params: ", params);
    console.log("query: ", query);
    res.send("Hello Employee, " + body.ename);
});
// working with post request to handle form data
app.post("/users", function (req, res) {
    let { body, params, query } = req;
    console.log("body: ", body);
    console.log("params: ", params);
    console.log("query: ", query);
    res.send("Hello Users, " + body.uname);
})
// step 4
const PORT = process.env.PORT || 5000;
app.listen(PORT, function (err, res) {
    if (err) throw err;
    console.log(`Application is stasted successfully and running on port: ${PORT}`);
})
