var http = require('http');
var url  = require('url');
var fs = require('fs');



// initial call
http.createServer(function (req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  console.log("http request received");

  if(req.url === '/index.html' || req.url === '/') {
    fs.readFile('index.html', function( err, html ) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end(html);
    })
  }

  if(req.url === '/app.js') {
    fs.readFile('app.js', function( err, js ) {
      res.writeHead(200, {'Content-Type': 'text/javascript'});
      res.end(js);
    })
  }

  if(req.url === '/main.css') {
    fs.readFile('main.css', function( err, css ) {
      res.writeHead(200, {'Content-Type': 'text/css'});
      res.end(css);
    })
  }


}).listen(1336, "127.0.0.1");


// response call
http.createServer(function (req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  var url_parts = url.parse(req.url, true);
  var query = url_parts.query;
  console.log("Logging data : "+ query.value);
  res.writeHead(200, {'Content-Type': 'text/plain'});

  res.end('Data logged on the server :  ' +query.value);
}).listen(1337, "127.0.0.1");
console.log('Server started running on http://localhost:1336/  ...');