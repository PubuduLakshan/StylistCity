'use strict';
module.exports = (sequelize, DataTypes) => {
  const Session = sequelize.define('Session', {
    date: DataTypes.DATE,
    session: DataTypes.STRING
  }, {});
  Session.associate = function(models) {
    // associations can be defined here
    Session.belongsTo(models.Stylist);
    Session.hasOne(models.Rate);
  };
  return Session;
};