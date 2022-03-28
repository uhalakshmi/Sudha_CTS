var express = require("express");

var router = express.Router();

router.get("/", function (req, res) {
    const {path, url,  body, params, query, file, files, header, cookies, session } = req;
    
    // res.cookie("session", session) 
    console.log("request path", url);
    console.log("session", session);
   
    res.send("Welcome to my home page");
})
router.get("/login/:uid/:pwd", function (req, res) {
    const { body, params, query, file, files, headers, cookies, session } = req;

    console.log("request path", req.url);
    console.log("params: ", params);
    console.log("session: ", session);
    session.user = params;
    res.send("Hi page");
})

router.get("/hello", function (req, res) {
    const { body, params, query, file, files, headers, cookies, session } = req;
    // console.log("cookies: ", cookies);

    console.log("request path", req.url);
    console.log("params: ", params);
    console.log("session: ", session);
    res.send("Hello page");
})
router.get("/aboutus", function (req, res) {
    const { body, params, query, file, files, headers, cookies, session } = req;
    // console.log("cookies: ", cookies);

    console.log("request path", req.url);
    console.log("params: ", params);
    console.log("session: ", session);
    res.send("aboutus page");
})
router.get("/contactus", function (req, res) {
    const { body, params, query, file, files, headers, cookies, session } = req;
    // console.log("cookies: ", cookies);

    console.log("request path", req.url);
    console.log("params: ", params);
    console.log("session: ", session);
    res.send("contacus page");
})
router.get("/operations", function (req, res) {
    const { body, params, query, file, files, headers, cookies, session } = req;
    // console.log("cookies: ", cookies);

    console.log("request path", req.url);
    console.log("params: ", params);
    console.log("session: ", session);
    res.send("operations page");
})
router.get("/serviecess", function (req, res) {
    const { body, params, query, file, files, headers, cookies, session } = req;
    // console.log("cookies: ", cookies);

    console.log("request path", req.url);
    console.log("params: ", params);
    console.log("session: ", session);
    res.send("serivecess page");
})
router.get("/logout", function (req, res) {
    const { body, params, query, file, files, headers, cookies, session } = req;
    // console.log("cookies: ", cookies);
    session.user = null;
    console.log("request path", req.url);
    // console.log("params: ", params);
    // console.log("session: ", session);
    res.send("serivecess page");
})

module.exports = router;