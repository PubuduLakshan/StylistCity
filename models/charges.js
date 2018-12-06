'use strict';
module.exports = (sequelize, DataTypes) => {
  const charges = sequelize.define('charges', {
    fullDay: DataTypes.INTEGER,
    morning: DataTypes.INTEGER,
    afternoon: DataTypes.INTEGER
  }, {});
  charges.associate = function(models) {
    // associations can be defined here
    charges.belongsTo(models.Stylist);
  };
  return charges;
};