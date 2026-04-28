const express = require("express");
const router = express.Router();
const Question = require("../models/Questions");

router.get("/", (req, res) => {
  Question.findAll()
    .then((question) => {
      res.json(question);
    })
    .catch((err) => {
      console.error("Fehler beim Abrufen von Daten aus der Datenbank:", err);
      res.status(500).json({ message: "Interner Serverfehler!" });
    });
});
router.get("/byQuizId", (req, res) => {
  const { quizId } = req.query;
  Question.findOne({ where: { quizId: quizId } })
    .then((question) => {
      res.json(question);
    })
    .catch((err) => {
      console.error("Fehler beim Abrufen von Daten aus der Datenbank:", err);
      res.status(500).json({ message: "Interner Serverfehler!" });
    });
});
router.get("/byQuestionId", (req, res) => {
  const { questionId } = req.query;
  Question.findOne({ where: { questionId: questionId } })
    .then((question) => {
      res.json(question);
    })
    .catch((err) => {
      console.error("Fehler beim Abrufen von Daten aus der Datenbank:", err);
      res.status(500).json({ message: "Interner Serverfehler!" });
    });
});

module.exports = router;