var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    var obj = {
        first: 'Jogn',
        last: 'Doe'
    }
    res.end(JSON.stringify(obj));
}).listen(1337, "127.0.0.1");
