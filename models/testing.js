'use strict';
module.exports = (sequelize, DataTypes) => {
  var Testing = sequelize.define('Testing', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Testing;
};