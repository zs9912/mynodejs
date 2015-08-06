//console.log("Hello world")
/*
var http = require("http");
http.createServer(function (request, response){
	response.writeHead(200, {'Content-Type':'text/plain'});
	response.end('Hello world\n');
}).listen(8081);

console.log('Server running at http://127.0.0.1:8081/');
*/
/*
var fs = require("fs");
var data = fs.readFileSync('input.txt');
console.log(data.toString());
console.log('Ended');
*/
/*
var fs = require("fs");
fs.readFile('input.txt', function(err, data){
	if(err)
		return console.error(err);
	console.log(data.toString());
});
console.log('The End');
*/
/*
// Import events module
var events = require('events');
// Create an eventEmitter object
var eventEmitter = new events.EventEmitter();

var connectHandler = function connected(){
	console.log('connection successful');
	eventEmitter.emit('data_received');
}
// Bind event and even handler as follows
// eventEmitter.on('eventName', eventHandler);
eventEmitter.on('connection', connectHandler);
eventEmitter.on('data_received', function(){
	console.log('data received successfully.');
});
// Fire an event 
// eventEmitter.emit('eventName');
eventEmitter.emit('connection');

console.log("Program Ended.");
*/
/*
var events = require('events');
var eventEmitter = new events.EventEmitter();
var listener1 = function listener1(){
	console.log('listener 1 executed');
}

var listener2 = function listener2(){
	console.log('listener 2 executed');
}
// Bind the connection event with the listener1 function
eventEmitter.addListener('connection', listener1);
// Bind the connection event with the listener2 function
eventEmitter.on('connection', listener2);

var eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners + " listener(s) listening to connection event");

eventEmitter.emit('connection');

eventEmitter.removeListener('connection', listener1);
console.log("Listener 1 will not listen now.");

eventEmitter.emit('connection');

eventListeners = require('events').EventEmitter.listenerCount(eventEmitter, 'connection');
console.log(eventListeners + " listener(s) listening to connection event");

console.log('Program Ended');
*/
/*
var buf = new Buffer(26);
for(var i = 0; i < 26; i++){
	buf[i] = i + 97;	
}
console.log(buf.toString('ascii'));
console.log(buf.toString('ascii',0,5));
*/
/*
var buf = new Buffer('Simply Easy Learning');
var json = buf.toJSON(buf);
console.log(json);
*/
/*
var buffer1 = new Buffer('TutorialPoint ');
var buffer2 = new Buffer('Simply Easy');
var buffer3 = Buffer.concat([buffer1,buffer2]);
console.log("buffer3 : "+buffer3.toString());

var compareRes = buffer1.compare(buffer2);
if(compareRes<0){
	console.log(buffer1 + " comes before "+buffer2);
}else if(compareRes == 0){
	console.log(buffer1 + " is same as "+ buffer2);
}else{
	console.log(buffer1 + " comes after "+buffer2);
}
*/
/*
var buffer1 = new Buffer('ABC');
//copy a buffer
var buffer2 = new Buffer(3);
buffer1.copy(buffer2);
console.log("buffer2 content: " + buffer2.toString());
*/
/*
var buffer1 = new Buffer('TutorialsPoint');
//slicing a buffer
var buffer2 = buffer1.slice(0,9);
console.log("buffer2 content: " + buffer2.toString());
*/
/*
var buffer = new Buffer('TutorialsPoint');
//length of the buffer
console.log("buffer length: " + buffer.length);
*/
/*
var fs = require("fs");
var data = '';

var readerStream = fs.createReadStream('input.txt');

readerStream.setEncoding('UTF8');
readerStream.on('data', function(chunk){
	data += chunk;
});

readerStream.on('end', function(){
	console.log(data);
});

readerStream.on('error', function(err){
	console.log(err.stack);
});

console.log("Program Ended");
*/
/*
var fs = require("fs");
var data = 'Simply Easy ';
var writeStream = fs.createWriteStream('output.txt');
writeStream.write(data, 'UTF8');
writeStream.end();
writeStream.on('finish', function(){
	console.log('Write Completed');
});
writeStream.on('error', function(err){
	console.log(err.stack);
});
console.log("Program Ended");
*/
/*
var fs = require("fs");
var readerStream = fs.createReadStream('input.txt');
var writerStream = fs.createWriteStream('output.txt');
readerStream.pipe(writerStream);
console.log("program ended");
*/
/*
var fs = require("fs");
var zlib = require("zlib");

fs.createReadStream("input.txt")
  .pipe(zlib.createGzip())
  .pipe(fs.createWriteStream('input.txt.gz'));

console.log("File Compressed.");
*/
/*
var fs = require("fs");
var zlib = require("zlib");

fs.createReadStream('input.txt.gz')
  .pipe(zlib.createGunzip())
  .pipe(fs.createWriteStream('input2.txt'));

console.log("File Decompressed.");
*/
/*
var fs = require("fs");

// Asynchronous - Opening File
console.log("Going to open file!");
fs.open('input.txt', 'r+', function(err, fd) {
   if (err) {
       return console.error(err);
   }
  console.log("File opened successfully!");     
});
*/
/*
var fs = require("fs");

console.log("Going to get file info!");
fs.stat('input.txt', function (err, stats) {
   if (err) {
       return console.error(err);
   }
   console.log(stats);
   console.log("Got file info successfully!");
   
   // Check file type
   console.log("isFile ? " + stats.isFile());
   console.log("isDirectory ? " + stats.isDirectory());    
});
*/
/*
var fs = require("fs");

console.log("Going to write into existing file");
fs.writeFile('input.txt', 'Simply Easy Learning!',  function(err) {
   if (err) {
       return console.error(err);
   }
   console.log("Data written successfully!");
   console.log("Let's read newly written data");
   fs.readFile('input.txt', function (err, data) {
      if (err) {
         return console.error(err);
      }
      console.log("Asynchronous read: " + data.toString());
   });
});
*/
/*
var fs = require("fs");
var buf = new Buffer(1024);

console.log("Going to open an existing file");
fs.open('input.txt', 'r+', function(err, fd) {
   if (err) {
       return console.error(err);
   }
   console.log("File opened successfully!");
   console.log("Going to read the file");
   fs.read(fd, buf, 0, buf.length, 0, function(err, bytes){
      if (err){
         console.log(err);
      }
      console.log(bytes + " bytes read");
      
      // Print only read bytes to avoid junk.
      if(bytes > 0){
         console.log(buf.slice(0, bytes).toString());
      }
   });
});
*/
/*
var fs = require("fs");
var buf = new Buffer(1024);

console.log("Going to open an existing file");
fs.open('input.txt', 'r+', function(err, fd) {
   if (err) {
       return console.error(err);
   }
   console.log("File opened successfully!");
   console.log("Going to read the file");
   fs.read(fd, buf, 0, buf.length, 0, function(err, bytes){
      if (err){
         console.log(err);
      }

      // Print only read bytes to avoid junk.
      if(bytes > 0){
         console.log(buf.slice(0, bytes).toString());
      }

      // Close the opened file.
      fs.close(fd, function(err){
         if (err){
            console.log(err);
         } 
         console.log("File closed successfully.");
      });
   });
});
*/
/*
var fs = require("fs");
var buf = new Buffer(1024);

console.log("Going to open an existing file");
fs.open('input.txt', 'r+', function(err, fd) {
   if (err) {
       return console.error(err);
   }
   console.log("File opened successfully!");
   console.log("Going to truncate the file after 10 bytes");
   
   // Truncate the opened file.
   fs.ftruncate(fd, 10, function(err){
      if (err){
         console.log(err);
      } 
      console.log("File truncated successfully.");
      console.log("Going to read the same file"); 
      fs.read(fd, buf, 0, buf.length, 0, function(err, bytes){
         if (err){
            console.log(err);
         }

         // Print only read bytes to avoid junk.
         if(bytes > 0){
            console.log(buf.slice(0, bytes).toString());
         }

         // Close the opened file.
         fs.close(fd, function(err){
            if (err){
               console.log(err);
            } 
            console.log("File closed successfully.");
         });
      });
   });
});
*/
/*
var fs = require("fs");

console.log("Going to create directory tmp");
fs.mkdir('tmp',function(err){
   if (err) {
       return console.error(err);
   }
   console.log("Directory created successfully!");
});

console.log("Going to create directory tmp/test");
fs.mkdir('tmp/test',function(err){
   if (err) {
       return console.error(err);
   }
   console.log("Directory created successfully!");
});
*/
/*
var fs = require("fs");

console.log("Going to read directory tmp");
fs.readdir("tmp/",function(err, files){
   if (err) {
       return console.error(err);
   }
   files.forEach( function (file){
       console.log( file );
   });
});
*/
/*
var fs = require("fs");

console.log("Going to delete directory tmp/test");
fs.rmdir("tmp/test",function(err){
   if (err) {
       return console.error(err);
   }
   console.log("Going to read directory tmp");
   fs.readdir("tmp/",function(err, files){
      if (err) {
          return console.error(err);
      }
      files.forEach( function (file){
          console.log( file );
      });
   });
});*/
/*
var fs = require("fs");

console.log("Going to delete an existing file");
fs.unlink('input.txt', function(err) {
   if (err) {
       return console.error(err);
   }
   console.log("File deleted successfully!");
});
*/

//console.log( __dirname );
//console.log( __filename );

function printHello(){
   console.log( "Hello, World!");
}
// Now call above function after 2 seconds
var t = setTimeout(printHello, 2000);

// Now clear the timer
clearTimeout(t);

// Now call above function after 2 seconds
setInterval(printHello, 2000);