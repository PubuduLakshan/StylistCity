'use strict';
module.exports = (sequelize, DataTypes) => {
  const Job = sequelize.define('Job', {
    jobName: DataTypes.STRING,
    jobStatus: DataTypes.STRING
  }, {});
  Job.associate = function(models) {
    // associations can be defined here
    Job.belongsTo(models.Client);
    Job.belongsTo(models.Stylist);
    Job.hasOne(models.Rating);
    Job.hasMany(models.Comment);
  };
  return Job;
};