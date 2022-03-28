var fs = require('fs');
var rs = fs.createReadStream('3.mp4');
var count = 0;
rs.on("data", function (chunk) {
    count++;
    console.log(chunk);
    console.log(chunk.length, count);
})