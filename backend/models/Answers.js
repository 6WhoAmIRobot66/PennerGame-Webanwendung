const { DataTypes, Model } = require("sequelize");
const sequelize = require("../config/database");
const Question = require("./Questions");
const { FOREIGNKEYS } = require("sequelize/lib/query-types");


const Answer = sequelize.define(
    "Answer", 
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    questionId: {
      type: DataTypes.INTEGER,
    },
    answerId: {
      type: DataTypes.INTEGER,
    },
    answerText: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isCorrect: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  });
  
  Answer.belongsTo(Question);
  
  module.exports = Answer;
 
