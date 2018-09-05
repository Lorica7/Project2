//****************MUST REWRITE if USING THE Sequelize CLI ******* export a function, not the obj *****


// Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a model that matches up with DB
var User= sequelize.define("user", {

  firstName: Sequelize.STRING,

  lastName: Sequelize.STRING,
 
  email: Sequelize.STRING,

  type: Sequelize.INTEGER,

  size: Sequelize.INTEGER,

  savedData: Sequelize.INTEGER
});

// Syncs with DB
User.sync();

//  Model available for other files (will also create a table)
module.exports = User;