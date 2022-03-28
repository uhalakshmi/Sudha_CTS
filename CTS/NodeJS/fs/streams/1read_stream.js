var fs = require('fs');
var rs = fs.createReadStream('NodeJSNotes2.txt');

rs.on("data", function (chunk) {
    console.log(chunk);
    console.log(chunk.length);
})