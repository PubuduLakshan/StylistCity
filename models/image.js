'use strict';
module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define('Image', {
    imagelocation: DataTypes.STRING
  }, {});
  Image.associate = function(models) {
    // associations can be defined here
    Image.belongsTo(models.Stylist)
  };
  return Image;
};