var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());


function readIndex() {
    var fname='index.html';
    var buf = fs.readFileSync(fname);
    console.assert(Buffer.isBuffer(buf),'The readFileSync did not return a Buffer');
    console.assert(buf.length>0,'index.html is empty');
    var c = buf.toString();
    return c;
}


app.get('/', function(request, response) {
    var c = readIndex();
    response.send(c);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
