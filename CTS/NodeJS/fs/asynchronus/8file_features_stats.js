var fs = require('fs');

fs.stat("simple.txt", function (err, stats) {
    if (err)
        console.log(err);
    else
        console.log(stats);
})