var express = require('express');

var app = express();

var chalk = require("chalk");

var path = require("path");

const mongoose = require('mongoose');//import mongoose

app.get("/", function(req, res,){
    res.send("Hello from my library app");
});

//connect your html on the browser
app.get("/frontend", function(req,res){
    res.sendFile(path.join(__dirname,'views/index.html'));
})

//need to connect your css and javascript in the public folder to the browser
app.use(express.static(path.join(path.dirname(__dirname, '/public/'))))

//connect your server
app.listen(3000, function() {
    console.log("Server has started on port....." + chalk.green("3000"));
});