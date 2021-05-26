'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ItemFavorite extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  ItemFavorite.init({
    imageLink: DataTypes.STRING,
    name: DataTypes.STRING,
    linkWebSite: DataTypes.STRING,
    priceCNY: DataTypes.DECIMAL,
    priceTHB: DataTypes.DECIMAL,
    cnyToTHB: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'ItemFavorite',
  });
  return ItemFavorite;
};