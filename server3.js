//this script doesn't work

var express = require('express');
var app = express();
var fs = require("fs");
var bodyParser = require('body-parser');
var multer = require('multer');
var urlencodeParser = bodyParser.urlencoded({extended: false})

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false}));
app.use(multer({ dest: './tmp/' }).single('file')); //

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

app.post('/file_upload', function(req, res){
	console.log(req.files.file.name);
	console.log(req.files.file.path);
	console.log(req.files.file.type);
	
	var file = __dirname + "/" + req.files.file.name;
	fs.readFile( req.files.file.path, function(err, data){
		fs.writeFile(file, data, function(err){
			if(err){
				console.log(err);
			}else{
				response = {
					message:'File uploaded successfully',
					filename: req.files.file.name
				};
			}
			console.log(response);
			res.end(JSON.stringify(response));
		});
	});
})

var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

})