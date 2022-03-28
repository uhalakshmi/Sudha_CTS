var fs = require('fs')

fs.appendFile("simpleFile2.txt", "this is 5 time ",
    function (err, result) {
        if (err) {
            console.log("Error occured while write data into file");
        }
        if (!err) {
            console.log("data is successfully appended into file.");
        }
    })