var express = require('express');
var cors = require("cors");

var app = express();
app.use(cors());
app.use(express.json());

app.get("/", function (req, res) {
    console.log("some thing");
    res.send("Welcome to my Home page.")
})
app.use(require('./routes/employees_routes'));
const PORT = 5005;
app.listen(PORT, function (err, res) {
    if (err) throw err;
    console.log(`Application is started successfull and running on port: ${PORT}`);
});


