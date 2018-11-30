'use strict';
module.exports = (sequelize, DataTypes) => {
  const Rating = sequelize.define('Rating', {
    rating: DataTypes.INTEGER
  }, {});
  Rating.associate = function(models) {
    // associations can be defined here
    Rating.belongsTo(models.Client);
    Rating.belongsTo(models.Stylist);
  };
  return Rating;
};