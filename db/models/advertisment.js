'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Advertisment extends Model {
    static associate({ Category, Like, Image }) {
      this.hasMany(Like, { foreignKey: 'adsId' });
      this.hasMany(Image, {  foreignKey: 'adsId' });
      this.belongsTo(Category, { foreignKey: 'categoryId' });
    }
  }
  Advertisment.init(
    {
      categoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Categories',
          key: 'id',
        },
      },
      price: DataTypes.INTEGER,
      description: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: 'Advertisment',
    }
  );
  return Advertisment;
};
