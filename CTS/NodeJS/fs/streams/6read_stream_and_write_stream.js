var fs = require('fs');
var rs = fs.createReadStream('sourceText.txt');
var ws = fs.createWriteStream('sourceText3.txt')
var count = 0;
rs.on("data", function (chunk) {
    ws.write(chunk);
})
rs.on("close", function (chunk) {
    console.log("File is transfered successfully");
})
