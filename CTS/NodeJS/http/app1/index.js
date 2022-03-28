var http = require('http');
var url = require('url');
var app = http.createServer(function (req, res) {
    // console.log("req: ", req);
    console.log("Hello world");
    console.log("this is my second change");
    console.log("this is my third change");
    let urlObj = url.parse(req.url, true);
    console.log(urlObj);
    let path = urlObj.pathname;
    console.log("path: ", path);
    console.log("request(actual) path: ", req.url);
    if (path === "/") {
        res.write("Welcome to My Home Page");
        res.end();
    }
    else if (path === '/employees') {
        res.write("Hello Employes ");
        res.end();
    } else if (path === '/users') {
        res.write("Hello Users");
        res.end();
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, function (err, res) {
    if (err) throw err;
    else 
        console.log(`Application is started successfully and running on port: ${PORT}...`);
});

