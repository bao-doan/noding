var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    var html = fs.readFileSync(__dirname + "/index.html", 'utf-8');
    var user = 'John Doe';
    html = html.replace("{user}", user);
    res.end(html);
}).listen(1337, "127.0.0.1");
