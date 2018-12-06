'use strict';
module.exports = (sequelize, DataTypes) => {
  const ratingstar = sequelize.define('ratingstar', {
    ratings: DataTypes.FLOAT
  }, {});
  ratingstar.associate = function(models) {
    // associations can be defined here
    ratingstar.belongsTo(models.Stylist);
  };
  return ratingstar;
};