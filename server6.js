var express = require('express');
var app = express();
var fs = require("fs");

//list all users
app.get('/listUsers', function (req, res) {
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
       console.log( data );
       res.end( data );
   });
})

//add user
var user = {
   "user4" : {
      "name" : "mohit",
      "password" : "password4",
      "profession" : "teacher",
      "id": 4
   }
}
app.get('/addUser', function (req, res) {
   // First read existing users.
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
       data = JSON.parse( data );
       data["user4"] = user["user4"];
       console.log( data );
       res.end( JSON.stringify(data));
   });
})

//show one user's detail
app.get('/:id', function (req, res) {
   // First read existing users.
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
       var users = JSON.parse( data );
       var userA = users["user" + req.params.id] 
       console.log( userA );
       res.end( JSON.stringify(userA));
   });
})

//delete one user, something's wrong
var id = 2;
app.get('/deleteUser', function (req, res) {

   // First read existing users.
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
       var users = JSON.parse( data );
       //delete users["user" + id];
       //users.splice(id-1, 1);
	   
       console.log( users );
       res.end( JSON.stringify(users));
   });
})


var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

})