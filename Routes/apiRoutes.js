var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/garments", function(req, res) {
    db.Garment.findAll({})
    .then(function(results) {
      res.json(results);
    });
  });



  app.get("/api/author/:author", function(req, res) {
    User.findAll({
      where: {
        email: req.params.email
      }
    }).then(function(results) {
      res.json(results);
    });
  });

  // Get all "long" books (books 150 pages or more)
  app.get("/api/books/long", function(req, res) {
    Garments.findAll({
      where: {
        color: {
          color: req.params.color
        }
      }
    }).then(function(results) {
      res.json(results);
    });
  });

  
  app.get("/api/books/short", function(req, res) {
    Garment.findAll({
      where: {
        size: {
          size: req.params.size
        }
      },
    }).then(function(results) {
      res.json(results);
    });
  });

  
  app.post("/api/new", function(req, res) {
    console.log("User Data:");
    console.log(req.body);
    User.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      size: req.body.size,
      type: req.body.type,
      password: req.body.password
    });
  });

  // Delete a book
  app.post("/api/delete", function(req, res) {
    console.log("Garment Data:");
    console.log(req.body);
    Garments.destroy({
      where: {
        id: req.body.id
      }
    });
  });










};
