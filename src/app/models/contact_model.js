const { Sequelize } = require("sequelize");
const configSequelize = require("../../config/sequelize");

const sequelize = new Sequelize(configSequelize);

const Contact = sequelize.define("Contact", {
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
});

sequelize.sync();

module.exports = Contact;
