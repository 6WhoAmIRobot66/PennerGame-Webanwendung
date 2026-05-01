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
const gameRoutes = require("./gameRoutes"); 
const fixRoutes = require("./fixRoutes"); // Geändert auf fixRoutes (mit s)

// Verwende Routen
router.use("/auth", authRoutes);
router.use("/questions", QuestionsRoutes);
router.use("/answers", AnswersRoutes);
router.use("/quizzes", QuizzesRoutes);
router.use("/stats", StatsRoutes);
router.use("/user", UserRoutes);
router.use("/trophies", trophiesRoutes);
router.use("/game", gameRoutes); 
router.use("/fix", fixRoutes); // Geändert auf fixRoutes (mit s)

module.exports = router;
