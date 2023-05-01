var express = require('express');

var app = express();

var chalk = require("chalk");

var path = require("path");

const mongoose = require('mongoose');//import mongoose

app.get("/", function(req, res,){
    res.send("Hello from my library app");
});

app.get("/frontend", function(req,res){
    res.sendFile(path.join(__dirname,'views/index.html'));
})

app.listen(3000, function() {
    console.log("Server has started on port....." + chalk.green("3000"));
});