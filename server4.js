var express = require('express');
var app = express();
var fs = require("fs");

var bodyParser = require('body-parser');
var multer  = require('multer');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));

var storage = multer.diskStorage({
	destination: function(req, file, cb){
		cb(null, './tmp/my-uploads')
	},
	filename: function(req, file, cb){		
		cb(null, file.originalname)
	}
})

//var upload = multer({ dest: './tmp/' });
//or this way, if need to save file with original name
var upload = multer({ storage: storage });

app.get('/index2.htm', function (req, res) {
   res.sendFile( __dirname + "/" + "index2.htm" );
})

app.post('/file_upload', upload.single('file'), function (req, res, next) {

   console.log(req.file.originalname);
   console.log(req.file.path);
   console.log(req.file.mimetype);

   var file = __dirname + "/" + req.file.originalname;
   fs.readFile( req.file.path, function (err, data) {
        fs.writeFile(file, data, function (err) {
         if( err ){
              console.log( err );
         }else{
               response = {
                   message:'File uploaded successfully',
                   filename:req.file.originalname
              };
          }
          console.log( response );
          res.end( JSON.stringify( response ) );
       });
   });
})

var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

})