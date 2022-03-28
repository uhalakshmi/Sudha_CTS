var express = require('express')
var router = express.Router();
var tokens = [];
router.get('/', function (req, res) {
    res.send("Welcome to my home page");
})

const auth = (req, res, next) => {
    console.log("from auth method");
    const { body, params, query, file, files, headers } = req;
    console.log("headers: ", headers);
    let token = headers.token-0;
    console.log("client token: ", token);
    if (!tokens.includes(token))
        return res.status(400).send({status:"failed", message: "Invalid previlizations"})
    next();
}
router.get('/hello', function (req, res) {
    res.send("this is hello page");
})
router.get('/hi/:name', function (req, res) {
    const { body, params, query, file, files } = req;
    console.log("body: ", body);
    console.log("params: ", params);
    console.log("query: ", query);
    console.log("file: ", file);
    console.log("files: ", files);
    res.send("This is hi page, "+ params.name);
})
router.post('/login', function (req, res) {
    const { body, params, query,  } = req;
    console.log("body: ", body);
    console.log("params: ", params);
    console.log("query: ", query);
    
    
    let token = Math.round(Math.random() * 1000000);
    console.log(token);
    tokens.push(token);
    console.log(tokens);
    console.log("==============================");
    res.send({status: "success", token, message: "Login is completed successfully"});
})
router.get('/aboutus', function (req, res) {
    res.send("this is aboutus page");
})
router.get('/contactus', function (req, res) {
    res.send("this is contactus page");
})

router.get('/secured1', auth, function (req, res) {
    res.send("this is secured1 page");
})
router.get('/secured2', auth, function (req, res) {
    res.send("this is secured2 page");
})
router.post('/secured3', auth, function (req, res) {
    res.send("this is secured3 page");
})
router.post('/secured4', auth, function (req, res) {
    res.send("this is secured4 page");
})



module.exports = router;