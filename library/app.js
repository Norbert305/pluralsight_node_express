var express = require('express');

var app = express();

var chalk = require("chalk");

var path = require("path");

const dotenv = require('dotenv');

const port = process.env.PORT || 3000 

const mongoose = require('mongoose');//import mongoose

app.get("/", function(req, res,){
    res.send("Hello from my library app");
});

//connect your html on the browser
app.get("/home", function(req,res){
    res.sendFile(path.join(__dirname,'views/index.html'));
})
app.get("/about", function(req,res){
    res.sendFile(path.join(__dirname,'views/index2.html'));
})
app.get("/services", function(req,res){
    res.sendFile(path.join(__dirname,'views/index3.html'));
})
app.get("/contact", function(req,res){
    res.sendFile(path.join(__dirname,'views/index4.html'));
})

//need to connect your css and javascript in the public folder to the browser
app.use(express.static(path.join(path.dirname(__dirname, '/public/'))))

//connect your server
app.listen(port, function() {
    console.log(`Server has started on port...${chalk.green(port)}`);
});