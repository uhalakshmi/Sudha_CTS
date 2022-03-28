var fs = require('fs');

fs.readFile("./simple.txt", function (err, res) {
    if (err) {
        console.log("Error occured while reading data from file");
    }
    if (!err) {
        console.log(res.toString());
    }
})