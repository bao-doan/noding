var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {

    if (req.url === '/' || req.url === '/index.html' || req.url === '/index') {

        fs.createReadStream(__dirname + '/index.html').pipe(res);

    } else if(req.url === '/api') {

        res.writeHead(200, { 'Content-Type': 'application/json' });

        var obj = {
            first: 'Jogn',
            last: 'Doe'
        }

        res.end(JSON.stringify(obj));
    } else {
        res.writeHead(404);
        res.end('Not Found');
    }



}).listen(1337, "127.0.0.1", function () {
    console.log('Server is listening on 127.0.0.1:1337');
});
