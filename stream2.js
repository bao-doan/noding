var fs = require('fs');
var zlib = require('zlib');

var readable = fs.createReadStream(__dirname + "/file/readme.txt", {
    encoding: 'utf-8',
    highWaterMark: 10 // 10/2024 KB = 10bit
});
// createReadStream() thuc hien doc tung phan data
var writable = fs.createWriteStream(__dirname + "/file/readme2.txt");
var compressed = fs.createWriteStream(__dirname + "/file/readme.txt.gz")
var gzip = zlib.createGzip();

// Copy to new file
readable.pipe(writable);
// readble.on() nghe su kien duoc tra ve duoi dang Chunk, tung manh data mot, 
// va sao chep tung phan data sang mot File moi.

// Compress
readable.pipe(gzip).pipe(compressed);