var bodyParser = require("body-parser"),
  mongoose = require("mongoose"),
  express = require("express"),
  app = express(),
  methodOverride = require("method-override");

var Product = require("./models/productSchema");
var routes = require("./models/routes");


mongoose.connect("mongodb://localhost/sewing");
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));

app.use(routes);


app.listen(process.env.PORT, process.env.IP, function() {
  console.log("SERVER HAS STARTED");
});
