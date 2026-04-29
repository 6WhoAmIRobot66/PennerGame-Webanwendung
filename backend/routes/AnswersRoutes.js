const express = require("express");
const router = express.Router();
const Answer = require("../models/Answers");

router.get("/", (req, res) => {
    Answer.findAll()
      .then((answer) => {
        res.json(answer);
      })
      .catch((err) => {
        console.error("Fehler beim Abrufen von Daten aus der Datenbank:", err);
        res.status(500).json({ message: "Interner Serverfehler!" });
      });
  });
  router.get("/byQuizId", (req, res) => {
    const { quizId } = req.query;
    Answer.findOne({ where: { quizId: quizId } })
      .then((answer) => {
        res.json(answer);
      })
      .catch((err) => {
        console.error("Fehler beim Abrufen von Daten aus der Datenbank:", err);
        res.status(500).json({ message: "Interner Serverfehler!" });
      });
  });
  router.get("/byQuestionId", (req, res) => {
    const { questionId } = req.query;
    Answer.findOne({ where: { questionId: questionId } })
      .then((answer) => {
        res.json(answer);
      })
      .catch((err) => {
        console.error("Fehler beim Abrufen von Daten aus der Datenbank:", err);
        res.status(500).json({ message: "Interner Serverfehler!" });
      });
  });
  router.get("/byAnswerId", (req, res) => {
    const { answerId } = req.query;
    Answer.findOne({ where: { answerId: answerId } })
      .then((answer) => {
        res.json(answer);
      })
      .catch((err) => {
        console.error("Fehler beim Abrufen von Daten aus der Datenbank:", err);
        res.status(500).json({ message: "Interner Serverfehler!" });
      });
  });
  
  module.exports = router;
  