"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) =>
    await queryInterface.createTable("contact", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },

      firstName: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      lastName: {
        type: Sequelize.STRING,
      },

      email: {
        type: Sequelize.STRING,
      },

      phone: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    }),

  down: async (queryInterface, Sequelize) => await queryInterface.dropTable("contact", {}),
};
