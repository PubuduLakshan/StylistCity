'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    body: DataTypes.STRING
  }, {});
  Comment.associate = function(models) {
    // associations can be defined here
    Comment.belongsTo(models.Client);
    Comment.belongsTo(models.Stylist);
    Comment.belongsTo(models.Job);
  };
  return Comment;
};