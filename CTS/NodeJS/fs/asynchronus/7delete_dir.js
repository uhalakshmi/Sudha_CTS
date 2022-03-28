var fs = require('fs')

fs.unlink("abc", function (err) {
    if (err) {
        console.log("Error occured while delete folder");
        console.log(err);
    }
    if (!err) {
        console.log("folder is deleted successfully.");
    }
})