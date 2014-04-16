var http = require('http');

// create a server respond to all requests
// with the current date.
var server = http.createServer(
	function(request, response){
		response.write(new Date().toString());
		response.end();
});

console.log('Server starting on port 4514! Woot!');
server.listen(4514);
