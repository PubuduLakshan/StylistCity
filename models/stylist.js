'use strict';
module.exports = (sequelize, DataTypes) => {
  const Stylist = sequelize.define('Stylist', {
    type: DataTypes.STRING,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    city: DataTypes.STRING,
    country: DataTypes.STRING,
    about: DataTypes.STRING
  }, {});
  Stylist.associate = function(models) {
    // associations can be defined here
    Stylist.hasMany(models.Skill);
    Stylist.hasMany(models.Qualification);
    Stylist.hasMany(models.Image);
    Stylist.hasMany(models.Session);
  };
  return Stylist;
};