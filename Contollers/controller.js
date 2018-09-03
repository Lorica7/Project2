var express = require("express");

var router = express.Router();

var users = require("../models/user.js");

router.get("/", function(request, response) {
  users.all(function(data) {
    var hbsObject = {
      clothes: data
    };
    console.log(hbsObject);
    response.render("index", hbsObject);
  });
});

router.post("/api/burgers", function(req, res) {
  console.log(req.body);
  users.insertOne([
    "burger_name", "devoured"
  ], [
    req.body.name, req.body.devoured
  ], function(result) {
 
  res.json({ id: result.insertId });
  });
});

router.put("/api/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);
console.log(req.body);
  users.updateOne({
    devoured: true
  }, condition, function(result) {
    if (result.changedRows == 0) {
  
    } else {
      res.status(200).end();
    }
  });
});

module.exports = router;
