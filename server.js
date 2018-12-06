
var sequelize = require('sequelize');

var mysql = require('mysql2');

var path = require('path');
// var expressVal = require('express-validator');

// require("dotenv").config();
var express = require("express");
var bodyParser = require("body-parser");

var db = require("./Models");

var app = express();
var PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// app.use(express.static(path.join__dirname, 'Public'));
// app.use(express.static(__dirname + '/public'));
app.use("/public", express.static(__dirname + "/Public"));


// Routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

var syncOptions = { force: false };

if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function() {
  app.listen(PORT, function() {
    console.log(
      `Listening on Port ${PORT}`
    
    );
  });
});

module.exports = app;