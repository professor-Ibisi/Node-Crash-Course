var http = require('http');
http.createServer(function(req,res){
    res.writeHead(200, {'content-Type': 'text/plain'});
    res.end('hello world!');
}).listen(3000);
console.log('sever started on localhost:3000;press Ctrl-C to terminate.....');