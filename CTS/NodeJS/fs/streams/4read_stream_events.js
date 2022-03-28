var fs = require('fs');
var rs = fs.createReadStream('NodeJSNotes.txt');
var count = 0;
rs.on("data", function (chunk) {
    count++;
    // console.log(chunk);
    console.log(chunk.length, count);
})
rs.on("open", function (err) {
    console.log("file is opend");
})
rs.on("close", function (err) {
    console.log("file is closed");
})
rs.on("ready", function (err) {
    console.log("file is ready");
})
rs.on("end", function (err) {
    console.log("file is reached end");
})