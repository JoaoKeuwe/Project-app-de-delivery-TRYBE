'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SalesProducts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
     models.Products.belongsToMany(models.Sales, {
      through: SalesProducts,
      foreignKey: 'productId',
      otherKey: 'saleId',
      as: 'sales',
     });

     models.Sales.belongsToMany(models.Products, {
      through: SalesProducts,
      foreignKey: 'saleId',
      otherKey: 'productId',
      as: 'products',
    });
    }
  }
  SalesProducts.init({
    saleId: DataTypes.INTEGER,
    productId: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
  }, {
    sequelize,
    underscored: true,
    timestamps: false,
    modelName: 'SalesProducts',
  });
  return SalesProducts;
};