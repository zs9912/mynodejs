var express = require('express');
var app = express();
var fs = require("fs");
var bodyParser = require('body-parser');

var urlencodeParser = bodyParser.urlencoded({extended: false})

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false}));

app.get('/', function (req, res) {
   res.send('Hello World');
})

app.get('/index1.htm', function(req, res){
	res.sendFile( __dirname + "/" + "index1.htm");
})

app.get('/process_get', function(req, res){
	response = {
		firstname:req.query.first_name,
		lastname:req.query.last_name
	};
	console.log(response);
	res.end(JSON.stringify(response));
})

app.post('/process_post', urlencodeParser, function(req, res){
	response = {
		firstname:req.body.first_name,
		lastname:req.body.last_name
	};
	console.log(response);
	res.end(JSON.stringify(response));
	
})

var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

})