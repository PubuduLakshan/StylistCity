'use strict';
module.exports = (sequelize, DataTypes) => {
  const Location = sequelize.define('Location', {
    street: DataTypes.STRING,
    city: DataTypes.STRING,
    postalcode: DataTypes.INTEGER,
    country: DataTypes.STRING
  }, {});
  Location.associate = function(models) {
    // associations can be defined here
    Location.belongsTo(models.Client);
  };
  return Location;
};