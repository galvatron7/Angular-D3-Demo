
var express = require('express');
var port = 8080;
const path = require("path");
var app = express();


var server = app.listen(port);

app.use(express.static(__dirname + '/public'));

app.use("*", function(req, res, next) {
    res.header("Cache-Control","private, no-cache, no-store, must-revalidate");
    res.header("Expires", "-1");
    res.header("Pragma", "no-cache");
    next();
})

app.get("/", function(req, res){
    res.sendFile(path.resolve("public/index.html"));
});

console.log('Magic happens on port ');