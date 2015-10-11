var http = require('http');

var leak = [];

var server = http.createServer(function(request, response){

  if(request.url === '/'){
    leak.push(function() {
    return req.headers;
    });
    response.writeHead(200, {"Content-Type": "text/html"});
    response.end("Hello user. This is the gh-api!");
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

server.listen(3030);
