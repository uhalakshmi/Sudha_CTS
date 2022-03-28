var fs = require('fs');
var rs1 = fs.createReadStream('sourceText.txt');
var rs2 = fs.createReadStream('sourceText.txt');
var rs3 = fs.createReadStream('sourceText.txt');
var rs4 = fs.createReadStream('sourceText.txt');
var count = 0;
rs1.on("data", function (chunk) {
    console.log("stream 1");
})
rs2.on("data", function (chunk) {
    console.log("stream 2");
})
rs3.on("data", function (chunk) {
    console.log("stream 3");
})
rs4.on("data", function (chunk) {
    console.log("stream 4");
})
