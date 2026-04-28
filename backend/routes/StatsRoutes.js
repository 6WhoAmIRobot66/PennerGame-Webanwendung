const express = require("express");
const router = express.Router();
const Stats = require("../models/Stats");
const { body } = require("express-validator");

router.get("/", (req, res) => {
  Stats.findAll()
    .then((stats) => {
      res.json(stats);
    })
    .catch((err) => {
      console.error("Fehler beim Abrufen von Daten aus der Datenbank:", err);
      res.status(500).json({ message: "Interner Serverfehler!" });
    });
});
router.get("/byId", (req, res) => {
  const { stats_id} = req.query;
  Stats.findOne({ where: { stats_id: stats_id } })
    .then((stats) => {
      res.json(stats);
    })
    .catch((err) => {
      console.error("Fehler beim Abrufen von Daten aus der Datenbank:", err);
      res.status(500).json({ message: "Interner Serverfehler!" });
    });
});
router.get("/byUserId", (req, res) => {
  const { userId } = req.query;
  Stats.findOne({ where: { userId: userId } })
    .then((stats) => {
      res.json(stats);
    })
    .catch((err) => {
      console.error("Fehler beim Abrufen von Daten aus der Datenbank:", err);
      res.status(500).json({ message: "Interner Serverfehler!" });
    });
});

router.post(
  "/",
  [
    body("stats_id").trim().isNumeric().notEmpty(),
    body("quiz_id").trim().isNumeric().notEmpty(),
    body("userId").trim().not().notEmpty().isNumeric(),
    body("progress").trim().notEmpty().isEmail(),
    body("right_answers").trim().isNumeric(),
    body("wrong_answers").trim().isNumeric(),
    body("score").trim().isNumeric(),
  ],
 async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { stats_id, quiz_id, userId, progress, right_answers, wrong_answers, score } = req.body;
    const stat = await Stats.create({
      stats_id: stats_id,
      quiz_id: quiz_id,
      userId: userId,
      progress: progress,
      right_answers: right_answers,
      wrong_answers: wrong_answers,
      score: score,
  });

    res.send("Neue User-Statistik erfolgreich erstellt!");
  }
);

router.put(
  "/:stats_id", 
  [
    body("stats_id").trim().isNumeric().notEmpty(),
    body("quiz_id").trim().isNumeric().notEmpty(),
    body("userId").trim().not().notEmpty().isNumeric(),
    body("progress").trim().notEmpty().isEmail(),
    body("right_answers").trim().isNumeric(),
    body("wrong_answers").trim().isNumeric(),
    body("score").trim().isNumeric(),
  ],
  async (req, res) => {
    const { stats_id  } = req.params;
    const { quiz_id, userId, progress, right_answers, wrong_answers, score } = req.body;

  try {

    const stats = await Stats.findOne({ where: { stats_id: stats_id } });

    if (!stats) {
      return res.status(404).json({ message: "Statistik nicht gefunden!" });
    }

    stats.quiz_id = quiz_id,
    stats.userId = userId,
    stats.progress = progress,
    stats.right_answers = right_answers,
    stats.wrong_answers = wrong_answers,
    stats.score = score,
    await stats.save

    res.json(stats);
  } catch (error) {
    console.error("Fehler beim Aktualis_ieren der Statistik:", error);
    res.status(500).json({ message: "Interner Serverfehler!" });
  }
});


router.delete("/:stats_id", async (req, res) => {
  const { stats_id } = req.params;

  try {
    const stats = await Stats.findOne({ where: { stats_id: stats_id } });

    if (!Stats) {
      return res.status(404).json({ message: "Statistik nicht gefunden!" });
    }
    await stats.destroy();

    res.json({ message: "Statistik erfolgreich gelöscht!" });
  } catch (error) {
    console.error("Fehler beim Löschen der Statistik:", error);
    res.status(500).json({ message: "Interner Serverfehler!" });
  }
});

router.get("/search", (req, res) => {
  const { username } = req.query;
  console.log("Hello World");
  Stats.findAll({ where: { username } })
    .then((users) => {
      res.json(Stats);
    })
    .catch((err) => {
      console.error("Fehler bei der Suche nach Benutzern:", err);
      res.status(500).json({ message: "Interner Serverfehler!" });
    });
});

module.exports = router;
