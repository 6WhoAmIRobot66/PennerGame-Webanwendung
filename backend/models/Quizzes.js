const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Quizzes = sequelize.define("Quiz", {
  quiz_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  quiz_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  questions_total: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
});

module.exports = Quizzes;
