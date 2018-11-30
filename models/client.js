'use strict';
module.exports = (sequelize, DataTypes) => {
  const Client = sequelize.define('Client', {
    clientType: DataTypes.STRING,
    clientName: DataTypes.STRING
  }, {});
  Client.associate = function(models) {
    // associations can be defined here
    Client.hasOne(models.Location);
    Client.hasMany(models.Rating);
    Client.hasMany(models.Job);
    Client.hasMany(models.Comment);
    Client.hasOne(models.User);

  };
  return Client;
};