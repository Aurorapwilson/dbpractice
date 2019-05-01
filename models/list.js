'use strict';
module.exports = (sequelize, DataTypes) => {
  const List = sequelize.define('List', {
    name:{
      type: DataTypes.STRING, 
      allowNull: false,
    }
  });
  List.associate = function(models) {
    // associations can be defined here
    List.hasMany(models.Todo, {
      foreignKey: 'listId',
      as: 'todos'
    })
  };
  return List;
};