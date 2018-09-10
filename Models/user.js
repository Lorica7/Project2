module.exports = function(sequelize, DataTypes) {


var User= sequelize.define("User", {

  firstName: DataTypes.STRING,

  lastName: DataTypes.STRING,
 
  email: DataTypes.STRING,

  type: DataTypes.INTEGER,

  size: DataTypes.INTEGER,

  savedData: DataTypes.INTEGER
});
return User;
};