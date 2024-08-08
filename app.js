const http = require('http');
const os = require('os');
console.log("Kubia server starting...");
var handler = function(request, response) {
  console.log("Received request from " + request.connection.remoteAddress);
  requestCount++;
  if (requestCount > 5) {
    response.writeHead(500);
    response.end("internal server error");
  } else {
    response.writeHead(200);
    response.end("(v3) You've hit " + os.hostname() + "\n")
  }
};
var www = http.createServer(handler);
www.listen(8080);
