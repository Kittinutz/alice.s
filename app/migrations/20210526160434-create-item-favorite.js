'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('ItemFavorites', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      imageLink: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      linkWebSite: {
        type: Sequelize.STRING
      },
      priceCNY: {
        type: Sequelize.DECIMAL
      },
      priceTHB: {
        type: Sequelize.DECIMAL
      },
      cnyToTHB: {
        type: Sequelize.DECIMAL
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('ItemFavorites');
  }
};