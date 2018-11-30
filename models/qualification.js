'use strict';
module.exports = (sequelize, DataTypes) => {
  const Qualification = sequelize.define('Qualification', {
    title: DataTypes.STRING,
    institute: DataTypes.STRING
  }, {});
  Qualification.associate = function(models) {
    // associations can be defined here
    Qualification.belongsTo(models.Stylist);
  };
  return Qualification;
};