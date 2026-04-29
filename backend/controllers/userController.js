const User = require("../models/Users");

// Funktion zum Hinzufügen von Punkten zu einem Benutzer
const addPoints = async (req, res) => {
  const { username, points } = req.query;
  try {
    // Finde den Benutzer in der Datenbank
    const user = await User.findOne({ where: { username } });
    if (!user) {
      return res.status(404).json({ message: "Benutzer nicht gefunden" });
    }
    // Füge die Punkte zum Benutzer hinzu
    const currentPoints = parseInt(user.points);
    const newPoints = currentPoints + parseInt(points);
    user.points = newPoints;
    await user.save();
    res.json({ message: "Punkte erfolgreich hinzugefügt" });
  } catch (error) {
    console.error("Fehler beim Hinzufügen von Punkten:", error);
    res.status(500).json({ message: "Interner Serverfehler!" });
  }
};

// Funktion zum Subtrahieren von Punkten von einem Benutzer
const subtractPoints = async (req, res) => {
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
};

module.exports = {
  addPoints,
  subtractPoints,
};
