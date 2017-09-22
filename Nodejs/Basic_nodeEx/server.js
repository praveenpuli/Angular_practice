var express = require("express");

var app = express();

app.use(express.static(__dirname+"/../Basic_nodeEx"));

app.listen(8080);
console.log("server listening port No.8080");
