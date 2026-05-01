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
  points: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  // --- PENNERGAME MECHANIK ---
  money: {
    type: DataTypes.DECIMAL(15, 2),
    defaultValue: 10.00, // Startkapital
  },
  max_money: {
    type: DataTypes.DECIMAL(15, 2),
    defaultValue: 20.00, // Becher-Limit
  },
  bottles: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  // Skills aus deinem Text
  att: { type: DataTypes.INTEGER, defaultValue: 1 },
  def: { type: DataTypes.INTEGER, defaultValue: 1 },
  dex: { type: DataTypes.INTEGER, defaultValue: 1 },
  // Zeitstempel für das Flaschensammeln (10 Min Check)
  last_collect: {
    type: DataTypes.DATE,
    allowNull: true,
  }
});

module.exports = User;

