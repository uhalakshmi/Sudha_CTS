var express = require('express');
var jwt = require('jsonwebtoken');

var router = express.Router();

const auth = (req, res, next) => {
    console.log("from auth method");
    const { headers, cookies, session } = req;
    jwt.verify(cookies.token, 'secret-key', function (err, decoded) {
        console.log("decode: ", decoded);
        if (err)
            res.render("insufficient", { req, res });
        if (!err) {
            next();
        }
    })
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
    
    console.log("cookies: ", cookies);
    console.log("uid: ", body.uid);

    // let token = Math.round(Math.random() * 1000000);
    var token = jwt.sign({ uid: body.uid }, 'secret-key');
    console.log(token);
    
    res.cookie("token", token);
    session.token = token;
    console.log("==============================");
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