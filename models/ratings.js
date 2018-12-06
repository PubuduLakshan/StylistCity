'use strict';
module.exports = (sequelize, DataTypes) => {
  const ratings = sequelize.define('ratings', {
    ratings: DataTypes.FLOAT
  }, {});
  ratings.associate = function(models) {
    // associations can be defined here
    ratings.belongsTo(models.Stylist);
  };
  return ratings;
};