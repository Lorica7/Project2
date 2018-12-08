var db = require("../Models");

module.exports = function(app) {
  
  app.get("/api/garments", function(req, res) {
    db.Garment.findAll({})
    .then(function(results) {
      res.json(results);
    });
  });

//***************/GET AND FIND/**** /ONE USER BY EMAIL/****** /FOR SIGN-IN PAGE //

  app.get("/api/email", function(req, res) {
    
    db.User.findAll({
      where: {
        email: req.body.email,
        firstName: req.body.firstName
      }
    }).then(function(results) {
      res.json(results);
    });
  });

//*********/GET AND FINDALL/*********** /CLOTHES BY COLOR/ ****** //
  
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

  //********************/GET AND FINDALL/*********** /BY SIZE/ ****** //
  
  app.get("/api/garments/size", (req, res)=> {
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

//********************/GET AND FINDALL/*********** /BY TYPE OR KIND / ****** //

  app.get("/api/garments/kind", (req, res) => {
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

  //********************/POST AND CREATE/*********** /NEW USER / ****** /REGISTER PAGE//
  
  app.post("/api/new", (req, res) => {
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

   //********************/PUT AND UPDATE/*********** /CURRENT USER / ****** /PROFILE PAGE//

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

  //********************/DELETE AND DESTROY/*********** /GARMENT DATA / ****** /PROFILE PAGE//

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
