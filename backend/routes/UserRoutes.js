const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const User = require("../models/Users");
const { addPoints } = require("../controllers/userController");

// GET-Anforderungen (Benutzerdaten abrufen):
router.get("/", (req, res) => {
  User.findAll()
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      console.error("Fehler beim Abrufen von Daten aus der Datenbank:", err);
      res.status(500).json({ message: "Interner Serverfehler!" });
    });
});
router.get("/byId", (req, res) => {
  const { id } = req.query;
  User.findOne({ where: { id: id } })
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      console.error("Fehler beim Abrufen von Daten aus der Datenbank:", err);
      res.status(500).json({ message: "Interner Serverfehler!" });
    });
});
router.get("/byUsername", (req, res) => {
  const { username } = req.query;
  User.findOne({ where: { username: username } })
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      console.error("Fehler beim Abrufen von Daten aus der Datenbank:", err);
      res.status(500).json({ message: "Interner Serverfehler!" });
    });
});

// POST-Anforderungen (Neuen Benutzer erstellen):
router.post(
  "/",
  [
    body("id").trim().isNumeric().notEmpty(),
    body("username").trim().isString(),
    body("email").trim().notEmpty().isEmail(),
    body("password").trim().notEmpty().isString().isLength({ min: 6 }),
    body("points").trim().isNumeric(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    // Code, um einen Benutzer zu erstellen
    const { id, username, email, password, points } = req.body;
    const User = await User.create({
      id: id,
      username: username,
      email: email,
      password: password,
      points: points,
    });
    res.send("Neuer Benutzer erfolgreich erstellt!");
  }
);

// PUT-Anforderungen (Benutzerdaten aktualisieren):
router.put(
  "/:id",
  [
    body("id").trim().isNumeric().notEmpty(),
    body("username").trim().isString(),
    body("email").trim().notEmpty().isEmail(),
    body("password").trim().notEmpty().isString().isLength({ min: 6 }),
    body("points").trim().isNumeric(),
  ],
  async (req, res) => {
    const { id } = req.params;
    const { username, email, password, points } = req.body;

    try {
      // Finde den User mit der angegebenen ID
      const user = await User.findOne({ where: { id: id } });

      if (!user) {
        return res.status(404).json({ message: "User nicht gefunden!" });
      }

      // Aktualisiere die Userdaten
      user.username = username;
      user.email = email;
      user.password = password;
      user.points = points;
      await user.save;

      res.json(user);
    } catch (error) {
      console.error("Fehler beim Aktualisieren des Users:", error);
      res.status(500).json({ message: "Interner Serverfehler!" });
    }
  }
);

// DELETE-Anforderungen (Benutzerdaten löschen):
router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    // Finde den User mit der angegebenen userId
    const user = await User.findOne({ where: { id: id } });

    if (!User) {
      return res.status(404).json({ message: "User nicht gefunden!" });
    }

    // Lösche den User
    await user.destroy();

    res.json({ message: "User erfolgreich gelöscht!" });
  } catch (error) {
    console.error("Fehler beim Löschen des Users:", error);
    res.status(500).json({ message: "Interner Serverfehler!" });
  }
});

// Benutzerpunkte hinzufügen:
router.post("/addPoints", addPoints);

// Benutzerpunkte subtrahieren:
router.post("/subtractPoints", async (req, res) => {
  const { username, points } = req.body;
  try {
    // Finde den Benutzer in der Datenbank
    const user = await User.findOne({ where: { username } });
    if (!user) {
      return res.status(404).json({ message: "Benutzer nicht gefunden" });
    }
    // Überprüfe, ob genügend Punkte vorhanden sind
    if (user.points < points) {
      return res
        .status(400)
        .json({ message: "Nicht genügend Punkte vorhanden" });
    }
    // Subtrahiere die Punkte vom Benutzer
    user.points -= points;
    await user.save();
    res.json({ message: "Punkte erfolgreich abgezogen" });
  } catch (error) {
    console.error("Fehler beim Subtrahieren von Punkten:", error);
    res.status(500).json({ message: "Interner Serverfehler!" });
  }
});

// Endpunkte, um Benutzerpunkte und Trophäen abzurufen

// GET-Endpunkt für Benutzerpunkte
router.get("/:userId/points", async (req, res) => {
  try {
    const userId = req.params.userId;
    console.log("Irgendwas rein", userId);
    // Hier rufst du die Benutzerpunkte aus der Datenbank ab
    // Datenbankabfrage, um die Punkte für den Benutzer mit der angegebenen ID zu erhalten
    const userPoints = await User.findOne({ where: { id: userId } });
    res.json({ points: userPoints.points });
  } catch (error) {
    console.error("Fehler beim Abrufen der Benutzerpunkte:", error);
    res.status(500).json({ error: "Interner Serverfehler" });
  }
});

module.exports = router;
