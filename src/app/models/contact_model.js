//Responsável pelo modelo de schema do bd.
//Estrutura de como o objeto vai ser salvo no bd.
const { Sequelize } = require("sequelize");

// não importa módulos usando o caminho completo
// sempre importa usando caminho relativo
const configSequelize = require("/home/gabriella/Documentos/AplicacoesNodejs/schedule_nodejs/src/config/sequelize.js");

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
