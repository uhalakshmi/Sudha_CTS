var express = require('express');


var app = express();
app.use(express.json());
app.use(require("./rutes"))
app.listen(5005, function (err) {
    if (err) {
        console.log("Error occured while starting application");
        console.log(err);
    }
    if (!err) {
        console.log("Application is started successfully and running on port 5005");
    }
})

