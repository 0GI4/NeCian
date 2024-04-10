'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Like extends Model {
    static associate({ User, Advertisment }) {
      this.belongsTo(User, { foreignKey: 'userId' });
      this.belongsTo(Advertisment, { foreignKey: 'adsId' });
    }
  }
  Like.init(
    {
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Users',
          key: 'id',
        },
      },
      adsId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Advertisments',
          key: 'id',
        },
      },
    },
    {
      sequelize,
      modelName: 'Like',
    }
  );
  return Like;
};
