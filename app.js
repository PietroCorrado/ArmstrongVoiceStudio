//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req, res){
  res.render("home");
});

app.get("/lessons", function(req, res){
  res.render("lessons");
});

app.get("/mission-statement", function(req, res){
  res.render("mission-statement");
});

app.get("/who-we-are", function(req, res){
  res.render("who-we-are");
});

app.get("/sytyko", function(req, res){
  res.render("sytyko");
});

app.get("/contact-us", function(req, res){
  res.render("contact-us");
});


app.listen(3000, function() {
  console.log("Server started on port 3000");
});
