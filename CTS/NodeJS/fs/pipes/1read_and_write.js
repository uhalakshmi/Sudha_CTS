var fs = require('fs');
var rs = fs.createReadStream('3.mp4');
var ws = fs.createWriteStream('3_4.mp4')



rs.pipe(ws);
