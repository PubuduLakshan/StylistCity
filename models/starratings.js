'use strict';
module.exports = (sequelize, DataTypes) => {
  const starratings = sequelize.define('starratings', {
    ratings: DataTypes.FLOAT
  }, {});
  starratings.associate = function(models) {
    // associations can be defined here
    starratings.belongsTo(models.Stylist);
  };
  return starratings;
};