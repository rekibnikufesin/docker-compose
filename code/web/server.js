var http = require('http');
var faker = require('faker');

var leak = [];

var server = http.createServer(function(request, response){

  if(request.url === '/'){
    leak.push(function() {
    return req.headers;
    });
    var color = faker.commerce.color();
    console.log('Your favorite color is ' + color);
    response.writeHead(200, {"Content-Type": "text/html"});
    response.end("Hello <strong>World</strong>. This is gh-web, and my favorite color is " + color);
  } else if(request.url === '/goodbye'){
    if(request.method === 'GET'){
      response.writeHead(200, {"Content-Type": "text/html"});
      response.end("Goodbye <strong>World</strong>");
    } else if(request.method === 'POST'){
      response.writeHead(200, {"Content-Type": "text/html"});
      response.end("Posting goodbye cruel world!");
    }

  }
});

server.listen(3000);
