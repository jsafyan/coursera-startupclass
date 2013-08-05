var express = require('express');
var fs = require('fs');

var filebuffer = fs.readFileSync("index.html");
app = express.createServer(express.logger());

app.get('/', function(request, response) {
    response.send(filebuffer.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
