var PORT = 50000;

var http = require('http');
var url = require('url');
var fs = require('fs');
var path = require('path');

var server = http.createServer(function (request, response) {
  var pathname = url.parse(request.url).pathname;
  request.on('data', function (chunk) {
    console.log('BODY: ' + chunk);
  });

  var responseJson = JSON.stringify({
    code: '200',
    msg: 'success',
    sysMsg: ''
  });
  response.setHeader('Content-Type', 'application/json');
  console.log('recieve a request from ',request.url);

  response.statusCode = 200;
  response.end(responseJson);
});
server.listen(PORT);
console.log("Server runing at port: " + PORT + ".");
