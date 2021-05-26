'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pedido extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // User.belongsTo(models.User, { foreignKey: "userId" });
    }
  };
  Pedido.init({
    idUser: DataTypes.INTEGER,
    idMovie: DataTypes.INTEGER,
    fechaALquiler: DataTypes.DATE,
    fechaDevolucion: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Pedido',
  });
  return Pedido;
};