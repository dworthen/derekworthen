var connect = require('connect')
		, http = require('http');

var app = connect().use(connect.static(__dirname))
		, port = process.env.port || 3000;

http.createServer(app).listen(port);