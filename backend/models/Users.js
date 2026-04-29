const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const User = sequelize.define("User", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  // Das alte "points" können wir als "Punktzahl/Ranking" behalten
  points: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  // --- NEU FÜR PENNERGAME ---
  money: {
    type: DataTypes.DECIMAL(15, 2), // Für Beträge wie 344.319,51
    defaultValue: 0.00,
  },
  bottles: {
    type: DataTypes.INTEGER, // Pfandflaschen
    defaultValue: 0,
  },
  caps: {
    type: DataTypes.INTEGER, // Kronkorken
    defaultValue: 0,
  },
  level: {
    type: DataTypes.INTEGER,
    defaultValue: 1,
  }
});

module.exports = User;
