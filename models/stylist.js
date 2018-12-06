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
    Stylist.hasOne(models.charges);
    Stylist.hasMany(models.Qualification);
    Stylist.hasMany(models.Image);
    Stylist.hasMany(models.Session);
    Stylist.hasMany(models.Rating);
    Stylist.hasMany(models.Job);
    Stylist.hasMany(models.Comment);
    Stylist.hasOne(models.User);
    Stylist.hasOne(models.ratingstar);
  
  };
  return Stylist;
};