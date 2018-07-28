var fs = require('fs');

var readable = fs.createReadStream(__dirname + "/file/readme.txt", {
    encoding: 'utf-8',
    highWaterMark: 10 // 10/2024 KB = 10bit
});
// createReadStream() thuc hien doc tung phan data
var writable = fs.createWriteStream(__dirname + "/file/readme2.txt");

readable.on('data', function(chunk){
    console.log(chunk.toString());
    writable.write(chunk);
});
// readble.on() nghe su kien duoc tra ve duoi dang Chunk, tung manh data mot, 
// va sao chep tung phan data sang mot File moi.