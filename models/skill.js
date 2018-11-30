'use strict';
module.exports = (sequelize, DataTypes) => {
  const Skill = sequelize.define('Skill', {
    name: DataTypes.STRING,
    level: DataTypes.STRING,
    //stylistId: DataTypes.INTEGER,
  }, {});
  Skill.associate = function(models) {
    // associations can be defined here
    Skill.belongsTo(models.Stylist);
  };
  return Skill;
};