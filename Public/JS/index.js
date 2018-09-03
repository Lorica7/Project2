require("dotenv").config();
var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");

var db = require("./models");

var app = express();
var PORT = process.env.PORT || 3000;

var expressVal = require('express-validator');

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//app.use(express.static("public"));

app.use(express.static(path.join__dirname, 'Public'));

// Handlebars
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main"
  })
);
app.set("view engine", "handlebars");

// Routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

app.post('users/add', function(req, res){
    var newUser = {
        first_Name : req.body.firstName,
        last_Name: req.body.lastName,
        email: req.body.email
    };
});

app.get('/', function, (req, res){
    res.render('index', {
        title: 'Customers',
        users: users
    });
});