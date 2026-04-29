const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Stats = sequelize.define("Stats", {
  stats_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  quiz_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  progress: {
    type: DataTypes.DECIMAL,
    allowNull: true,
  },
  right_answers: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  wrong_answers: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  score: {
    type: DataTypes.DECIMAL,
    allowNull: true,
  },
});

module.exports = Stats;
