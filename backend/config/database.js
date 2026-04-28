const Sequelize = require("sequelize");
require("dotenv").config();

const { DB_NAME, DB_USERNAME, DB_PASSWORD } = process.env;

// Datenbankverbindung konfigurieren:
const sequelize = new Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD, {
  host: "localhost",
  dialect: "mysql",
});

module.exports = sequelize;
