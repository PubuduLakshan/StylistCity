'use strict';
module.exports = (sequelize, DataTypes) => {
  const Rate = sequelize.define('Rate', {
    rate: DataTypes.FLOAT
  }, {});
  Rate.associate = function(models) {
    // associations can be defined here
    Rate.belongsTo(models.Session);
  };
  return Rate;
};