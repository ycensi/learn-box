var express = require("express");

var app = express();

app.get('/', function(req, res) {
	res.send("OK!");
});

app.get('/foo', function(req, res) {
	res.send("bar");
});

app.listen(80, function() {
	console.log('Listening port 80');
});