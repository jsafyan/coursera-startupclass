var fs = require('fs');
var file = "hello.txt";
var text = "A startup is a business built to grow rapidly.\n";

fs.writeFileSync(file, text);
console.log("Script: " + __filename + "\nWrote: " + text + "To: " + file);
