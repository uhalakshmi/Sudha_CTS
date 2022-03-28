var fs = require('fs');
var rs = fs.createReadStream('sourceText.txt');
var count = 0;
rs.on("data", function (chunk) {
    count++;
    console.log(chunk.toString());
    console.log(chunk.length, count);
})