'use strict';
module.exports = (sequelize, DataTypes) => {
  const Todo = sequelize.define('Todo', {
    name: {
      type: DataTypes.STRING,
      allowNull: false, 
    },

    designation: {
      type: DataTypes.STRING,
      defaultValue: false,
    }
  });

  Todo.associate = function(models) {
    // associations can be defined here
    Todo.belongsTo(models.List,{
      foreignKey: 'listId',
      onDelete: 'CASCADE',
    })
  };
  return Todo;
};