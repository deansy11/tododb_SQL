'use strict';
module.exports = function(sequelize, DataTypes) {
  var todos = sequelize.define('todos', {
    todoitem: DataTypes.STRING,
    complete: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return todos;
};