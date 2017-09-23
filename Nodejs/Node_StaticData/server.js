var express = require("express");
var fs = require("fs");
var app = express();
app.use(express.static(__dirname+"/../Node_StaticData"));

app.get("/" , function(req,res){
    fs.readFile(__dirname+"/sample.json", function(err,data){
        console.log(data.toString());
        res.send(data.toString());
    });
});

app.listen(63342);
console.log("Server Listening the Port No.63342");
