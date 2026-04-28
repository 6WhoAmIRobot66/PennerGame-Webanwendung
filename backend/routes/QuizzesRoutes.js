const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const Quizzes = require("../models/Quizzes");

router.get("/", (req, res) => {
  Quizzes.findAll()
    .then((quizzes) => {
      res.json(quizzes);
    })
    .catch((err) => {
      console.error("Fehler beim Abrufen von Daten aus der Datenbank:", err);
      res.status(500).json({ message: "Interner Serverfehler!" });
    });
});
router.get("/byId", (req, res) => {
  const { quiz_id } = req.query;
  Quizzes.findOne({ where: { quiz_id: quiz_id } })
    .then((quiz) => {
      res.json(quiz);
    })
    .catch((err) => {
      console.error("Fehler beim Abrufen von Daten aus der Datenbank:", err);
      res.status(500).json({ message: "Interner Serverfehler!" });
    });
});
router.get("/byName", (req, res) => {
  const { quiz_name } = req.query;
  Quizzes.findOne({ where: { quiz_name: quiz_name } })
    .then((quiz) => {
      res.json(quiz);
    })
    .catch((err) => {
      console.error("Fehler beim Abrufen von Daten aus der Datenbank:", err);
      res.status(500).json({ message: "Interner Serverfehler!" });
    });
});

router.post(
  "/",
  [
    body("quiz_id").trim().isNumeric().notEmpty(),
    body("quiz_name").trim().isString(),
    body("questions_total").trim().isNumeric(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { quiz_id, quiz_name, questions_total } = req.body;
    const quiz = await Quizzes.create({
      quiz_id: quiz_id,
      quiz_name: quiz_name,
      questions_total: questions_total,
  });

    res.send("Neues Quiz erfolgreich erstellt!");
  }
);

router.put("/:quiz_id",
[
  body("quiz_id").trim().isNumeric().notEmpty(),
  body("quiz_name").trim().isString(),
  body("questions_total").trim().isNumeric(),
],
async (req, res) => {
  const { quiz_id } = req.params;
  const { quiz_name, questions_total } = req.body;

try {
  const quiz = await Quizzes.findOne({ where: { quiz_id: quiz_id } });

  if (!quiz) {
    return res.status(404).json({ message: "Quiz nicht gefunden!" });
  }

  quiz.quiz_name = quiz_name;
  quiz.questions_total = questions_total;
  await quiz.save()

  res.json(quiz);
} catch (error) {
  console.error("Fehler beim Aktualisieren des Quizzes:", error);
  res.status(500).json({ message: "Interner Serverfehler!" });
}
});


router.delete("/:quiz_id", async (req, res) => {
  const { quiz_id } = req.params;

  try {

    const quiz = await Quizzes.findOne({ where: { quiz_id: quiz_id } });

    if (!Quizzes) {
      return res.status(404).json({ message: "Quiz nicht gefunden!" });
    }

    await quiz.destroy();

    res.json({ message: "Quiz erfolgreich gelöscht!" });
  } catch (error) {
    console.error("Fehler beim Löschen des Quizzes:", error);
    res.status(500).json({ message: "Interner Serverfehler!" });
  }
});

router.get("/search", (req, res) => {
  const { quiz_name } = req.query;
  console.log("Hello World");
  Quizzes.findAll({ where: { quiz_name } })
    .then((users) => {
      res.json(Quizzes);
    })
    .catch((err) => {
      console.error("Fehler bei der Suche nach Quizzes:", err);
      res.status(500).json({ message: "Interner Serverfehler!" });
    });
});

module.exports = router;
