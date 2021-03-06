'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate(models) {
    }
  }
  Product.init({
    name: {
      type: DataTypes.STRING,
    },
    category: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Categories',
        key: 'id',
      },
    },
    price: {
      type: DataTypes.FLOAT
    }
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};