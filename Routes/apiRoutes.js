var db = require("../Models");

module.exports = function(app) {
  
  app.get("/api/garments", function(req, res) {
    db.Garment.findAll({})
    .then(function(results) {
      res.json(results);
    });
  });



  app.get("/api/user/:email", function(req, res) {
    db.User.findAll({
      where: {
        email: req.params.email
      }
    }).then(function(results) {
      res.json(results);
    });
  });


  app.get("/api/garments/color", function(req, res) {
    db.Garments.findAll({
      where: {
        color: {
          color: req.params.color
        }
      }
    }).then(function(results) {
      res.json(results);
    });
  });

  
  app.get("/api/garments/size", function(req, res) {
    db.Garment.findAll({
      where: {
        size: {
          size: req.params.size
        }
      },
    }).then(function(results) {
      res.json(results);
    });
  });

  app.get("/api/garments/kind", function(req, res) {
    db.Garment.findAll({
      where: {
        kind: {
          kind: req.params.kind
        }
      },
    }).then(function(results) {
      res.json(results);
    });
  });

  
  app.post("/api/new", function(req, res) {
    console.log("User Data:");
    console.log(req.body);
    db.User.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      size: req.body.size,
      type: req.body.type,
      password: req.body.password
    }).then(function(results) {
      res.json(results);
    });
  });

  app.put("/api/update", function(req, res) {
    console.log("User Data:");
    console.log(req.body);
    db.User.update({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      size: req.body.size,
      type: req.body.type,
      password: req.body.password
    },  {
      where: {
        id: 1
      }
  }).then(function(results) {
      res.json(results);
    });
  });


  app.delete("/api/delete", function(req, res) {
    console.log("Garment Data:");
    console.log(req.body);
    db.Garments.destroy({
      where: {
        id: req.body.id
      }
    }).then(function(results) {
      res.json(results);
    });
  });


};
