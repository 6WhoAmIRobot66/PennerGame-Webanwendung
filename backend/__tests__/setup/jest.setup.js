const sequelize = require("../../config/database");

const TestDataUsers = require("./test-data/TestDataUsers");
const TestDataStats = require("./test-data/TestDataStats");
const TestDataQuizzes = require("./test-data/TestDataQuizzes");
const TestDataTrophies = require("./test-data/TestDataTrophies");
const QuizHTMLQuestions = require("./test-data/QuizHTMLQuestions");
const QuizHTMLAnswers = require("./test-data/QuizHTMLAnswers");
const QuizJavascriptQuestions = require("./test-data/QuizJavascriptQuestions");
const QuizJavascriptAnswers = require("./test-data/QuizJavascriptAnswers");
const QuizPythonQuestions = require("./test-data/QuizPythonQuestions");
const QuizPythonAnswers = require("./test-data/QuizPythonAnswers");

const User = require("../../models/Users");
const Stats = require("../../models/Stats");
const Quizzes = require("../../models/Quizzes");
const Trophies = require("../../models/Trophy")
const HTMLQuestions = require("../../models/Questions");
const HTMLAnswers = require("../../models/Answers");
const JavascriptQuestions = require("../../models/Questions");
const JavascriptAnswers = require("../../models/Answers");
const PythonQuestions = require("../../models/Questions");
const PythonAnswers = require("../../models/Answers");

module.exports = async () => {
    try {
      await sequelize.dropSchema("users");
      await sequelize.dropSchema("stats");
      await sequelize.dropSchema("quizzes");
      await sequelize.dropSchema("trophies");
      await sequelize.dropSchema("htmlquestions");
      await sequelize.dropSchema("htmlanswers");
      await sequelize.dropSchema("javascriptquestions");
      await sequelize.dropSchema("javascriptanswers");
      await sequelize.dropSchema("pythonquestions");
      await sequelize.dropSchema("pythonanswers");
      
      await sequelize.sync();
      // Daten für Tests einfügen
      await User.bulkCreate(TestDataUsers);
      await Stats.bulkCreate(TestDataStats);
      await Quizzes.bulkCreate(TestDataQuizzes);
      await Trophies.bulkCreate(TestDataTrophies);
      await HTMLQuestions.bulkCreate(QuizHTMLQuestions);
      await HTMLAnswers.bulkCreate(QuizHTMLAnswers);
      await JavascriptQuestions.bulkCreate(QuizJavascriptQuestions);
      await JavascriptAnswers.bulkCreate(QuizJavascriptAnswers);
      await PythonQuestions.bulkCreate(QuizPythonQuestions)
      await PythonAnswers.bulkCreate(QuizPythonAnswers);

    } catch (e) {
      console.error("MY DB Issue", e);
    }

  };

// module.exports = {
//   testEnvironment: customTestEnvironment(),
//   moduleNameMapper: {
//     "^jsonwebtoken$": "<rootDir>/__mocks__/jsonwebtoken.js",
//   },
//   testRegex: /\.test\.js$/,
// };
