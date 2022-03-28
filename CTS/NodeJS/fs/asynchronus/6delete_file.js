var fs = require('fs')

fs.unlink("simpleFile2.txt", function (err) {
    if (err) {
        console.log("Error occured while delete file");
        console.log(err);
    }
    if (!err) {
        console.log("file is deleted successfully.");
    }
})