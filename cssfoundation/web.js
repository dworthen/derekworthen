var http = require('http');
var fs = require('fs');
var url = require('url');
var path = require('path');

var port = process.env.PORT || 3000;

var server = http.createServer(function(request, response) {
	var filepath = '.' + request.url;
	if(filepath == './') {
		filepath = './index.html';
	}
	
	var extname = path.extname(filepath);
	var contentType = 'text/html';
	
	switch(extname) {
		case '.js' :
			contentType = 'text/javascript';
		break;
		case '.css' :
			contentType = 'text/css';
		break;
	}

	path.exists(filepath, function(exists) {
		if (exists) {
			fs.readFile(filepath, function(error, content) {
				if(error) {
					response.writeHead(500);
          response.end(error);
				} else {
					response.writeHead(200, {"Content-Type" : contentType});
					response.end(content, 'utf-8');
				}
			});
		} else {
			response.writeHead(404);
			response.end('404 File not Found');
		}
	});

}).listen(port, function() {
	console.log("listening on " + port);
});
