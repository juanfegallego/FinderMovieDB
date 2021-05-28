'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Order, { foreignKey: "userId" });
    }
  };
  User.init({
    nombre: DataTypes.STRING,
    password: DataTypes.STRING,
    isAdmin: DataTypes.BOOLEAN,
    apellido1: DataTypes.STRING,
    apellido2: DataTypes.STRING,
    edad: DataTypes.INTEGER,
    direccion: DataTypes.STRING,
    cp: DataTypes.INTEGER,
    email: DataTypes.STRING,
    telefono: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};