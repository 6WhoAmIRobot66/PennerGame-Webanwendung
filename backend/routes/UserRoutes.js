const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const User = require("../models/Users");
// Hier importieren wir die Funktionen aus dem Controller
const { addPoints, getNavbarData } = require("../controllers/userController"); 

// --- BESTEHENDE GET-ANFORDERUNGEN ---
router.get("/", (req, res) => {
  User.findAll()
    .then((user) => res.json(user))
    .catch((err) => {
      console.error("Fehler beim Abrufen:", err);
      res.status(500).json({ message: "Interner Serverfehler!" });
    });
});

// ... (Deine Routen /byId, /byUsername bleiben alle exakt so wie sie sind) ...

router.get("/byId", (req, res) => { /* Code lassen */ });
router.get("/byUsername", (req, res) => { /* Code lassen */ });

// --- NEUER ENDPUNKT FÜR DIE NAVBAR (PENNERGAME) ---
// Dieser Endpunkt nutzt die Logik aus dem userController
router.get("/navbar-stats", getNavbarData); 

// --- BESTEHENDE POST/PUT/DELETE ROUTEN ---
router.post("/", /* Deine Validierung */ async (req, res) => { /* Code lassen */ });

// Benutzerpunkte hinzufügen (nutzt Controller):
router.post("/addPoints", addPoints);

// Benutzerpunkte subtrahieren (inline):
router.post("/subtractPoints", async (req, res) => {
  const { username, points } = req.body;
  try {
    const user = await User.findOne({ where: { username } });
    if (!user) return res.status(404).json({ message: "Benutzer nicht gefunden" });
    if (user.points < points) return res.status(400).json({ message: "Zu wenig Punkte" });
    user.points -= points;
    await user.save();
    res.json({ message: "Punkte abgezogen" });
  } catch (error) {
    res.status(500).json({ message: "Fehler!" });
  }
});

// GET-Endpunkt für Benutzerpunkte
router.get("/:userId/points", async (req, res) => {
  try {
    const userId = req.params.userId;
    const userPoints = await User.findOne({ where: { id: userId } });
    res.json({ points: userPoints.points });
  } catch (error) {
    res.status(500).json({ error: "Fehler" });
  }
});

module.exports = router;
