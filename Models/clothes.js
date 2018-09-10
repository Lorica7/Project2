module.exports = function(sequelize, DataTypes) {
   
    var Garment = sequelize.define("Garment", {
      text: DataTypes.STRING,
      description: DataTypes.TEXT
    });
    return Garment;
  };
  