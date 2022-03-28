var fs = require('fs');

fs.writeFile("simpleFile2.txt",
    "this is third time ", function (err) {
        if (err) {
            console.log("Error occured while write data into file");
        }
        if (!err) {
            console.log("data is successfully saved into file.");
        }
    })