var fs = require('fs');
var express = require('express')
var app = express()

app.use(express.static('public'));

app.get('',function (req,response) {
	response.sendFile(__dirname + '/' + 'index.html')
})

var server = app.listen(function() {
	var host = server.address().address
	var port = server.address().port
	  	console.log('listening at http://%s:%s',host,port)
	});
