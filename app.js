var http = require('http'),
		fs   = require('fs'),
		path = require('path');

http.createServer(function(req, res) {
	var filepath = req.url,
			contentType,
			extname;

	if (filepath == '/') {
		filepath = '/index.html';
	}

	filepath = '.' + filepath;

	extname = path.extname(filepath);

	switch(extname) {
		case '.js' :
			contentType = 'text/javascript';
		break;
		case '.css' :
			contentType = 'text/css';
		break;
    case '.jpg' :
      contentType = 'image/jpeg';
    break;
		default:
			contentType = 'text/html';
	}

	path.exists(filepath, function (exists) {
		if (exists) {
			fs.readFile(filepath, function (err, content) {
				if (err) {
					res.writeHead(500);
					res.end(err);	
				} else {
					res.writeHead(200, {'content-type': contentType});
					res.end(content, 'utf-8');
				}
			});	
		} else {
			res.writeHead(400);
			res.end('404 - Page Not Found');
		}
	});
}).listen(process.env.PORT || 3000);
