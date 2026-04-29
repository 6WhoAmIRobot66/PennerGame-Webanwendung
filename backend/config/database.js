<<<<<<< HEAD
const Sequelize = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(
  process.env.DB_NAME, 
  process.env.DB_USER, // Prüfe: Heißt es in der .env DB_USER oder DB_USERNAME?
  process.env.DB_PASSWORD, 
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: "mysql",
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false 
      }
    }
  }
);

module.exports = sequelize;
=======
const Sequelize = require("sequelize");
require("dotenv").config();

const { DB_NAME, DB_USERNAME, DB_PASSWORD } = process.env;

// Datenbankverbindung konfigurieren:
const sequelize = new Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD, {
  host: "localhost",
  dialect: "mysql",
});

module.exports = sequelize;
>>>>>>> bc276a21dc66fe46de213dd300bd6db93c206229
