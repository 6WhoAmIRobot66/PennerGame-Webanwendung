const express = require("express");
const router = express.Router();

// Importiere Routen
const authRoutes = require("./authRoutes");
const QuestionsRoutes = require("./QuestionsRoutes");
const AnswersRoutes = require("./AnswersRoutes");
const QuizzesRoutes = require("./QuizzesRoutes");
const StatsRoutes = require("./StatsRoutes");
const UserRoutes = require("./UserRoutes");
const trophiesRoutes = require("./trophiesRoutes");

// Verwende Routen
router.use("/auth", authRoutes);
router.use("/questions", QuestionsRoutes);
router.use("/answers", AnswersRoutes);
router.use("/quizzes", QuizzesRoutes);
router.use("/stats", StatsRoutes);
router.use("/user", UserRoutes);
router.use("/trophies", trophiesRoutes);

module.exports = router;
