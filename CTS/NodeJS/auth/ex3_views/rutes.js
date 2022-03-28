var express = require('express')
var router = express.Router();
var tokens = [];

const auth = (req, res, next) => {
    console.log("from auth method");
    const { headers, cookies, session } = req;
    
    if (!session.token) {
        res.render("insufficient", { req, res });
    } else {
        next();
    }
}

router.get('/', function (req, res) {
    res.render("home", {req, res})
})

router.get('/aboutus', function (req, res) {
    res.render("aboutus", {req, res});
})

router.get('/operations', auth, function (req, res) {
    res.render('operations', {req, res});
})
router.get('/services', auth, function (req, res) {
    res.render('services', {req, res});
})
router.get('/blogs', auth, function (req, res) {
    res.render('blogs', {req, res});
})
router.get('/contactus', function (req, res) {
    res.render("contactus", {req, res});
})
router.get('/login', function (req, res) {
    res.render("login", {req, res});
})
router.post('/login', function (req, res) {
    const { body, params, query, cookies, session  } = req;
    console.log("body: ", body);
    console.log("params: ", params);
    console.log("query: ", query);
    console.log("cookies: ", cookies);
    console.log("session: ", session);
    console.log("uid: ", body.uid);
    let token = Math.round(Math.random() * 1000000);
    console.log(token);
    tokens.push(token);
    console.log(tokens);
    res.cookie("token", token);
    session.token = token;
    console.log("session: ", session);
    // res.cookie("token", token);
    console.log("==============================");
    // res.send({status: "success", token, message: "Login is completed successfully"});
    res.render("home", {req, res});
})
router.get("/logout", function (req, res) {
    const { cookies, session } = req;
    delete session.token;
    // res.cookie("token", 0, { maxAge: 0 });
    res.clearCookie("token");
    res.render("home", {req, res})
})


router.post('/secured3', auth, function (req, res) {
    res.send("this is secured3 page");
})
router.post('/secured4', auth, function (req, res) {
    res.send("this is secured4 page");
})



module.exports = router;