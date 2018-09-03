// Dependencies
// =============================================================

// Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a "Character" model that matches up with DB
var User= sequelize.define("user", {
  // the routeName gets saved as a string
  firstName: Sequelize.STRING,
  // the name of the character (a string)
  lastName: Sequelize.STRING,
  // the character's role (a string)
  email: Sequelize.STRING,
  // the character's age (a string)
  type: Sequelize.INTEGER,
  // and the character's force points (an int)
  size: Sequelize.INTEGER
});

// Syncs with DB
User.sync();

// Makes the Character Model available for other files (will also create a table)
module.exports = Character;