module.exports = function(sequelize, DataTypes) {
   
    var Garments = sequelize.define("Garment", {
      text: DataTypes.STRING,
      description: DataTypes.TEXT
    });
    return Garments;
  };
  