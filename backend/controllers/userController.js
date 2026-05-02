const { User } = require("../models"); // Wir nutzen den zentralen Import

// --- DEINE BESTEHENDE LOGIK ---
const addPoints = async (req, res) => {
  const { username, points } = req.query;
  try {
    const user = await User.findOne({ where: { username } });
    if (!user) {
      return res.status(404).json({ message: "Benutzer nicht gefunden" });
    }
    const currentPoints = parseInt(user.points) || 0;
    user.points = currentPoints + parseInt(points);
    await user.save();
    res.json({ message: "Punkte erfolgreich hinzugefügt" });
  } catch (error) {
    console.error("Fehler beim Hinzufügen von Punkten:", error);
    res.status(500).json({ message: "Interner Serverfehler!" });
  }
};

const subtractPoints = async (req, res) => {
  const { username, points } = req.body;
  try {
    const user = await User.findOne({ where: { username } });
    if (!user) {
      return res.status(404).json({ message: "Benutzer nicht gefunden" });
    }
    if (user.points < points) {
      return res.status(400).json({ message: "Nicht genügend Punkte vorhanden" });
    }
    user.points -= points;
    await user.save();
    res.json({ message: "Punkte erfolgreich abgezogen" });
  } catch (error) {
    console.error("Fehler beim Subtrahieren von Punkten:", error);
    res.status(500).json({ message: "Interner Serverfehler!" });
  }
};

// --- NEUE DYNAMISCHE PENNERGAME LOGIK FÜR DIE NAVBAR ---
const getNavbarData = async (req, res) => {
  try {
    // Wir nehmen die ID aus dem Query-Parameter (?userId=X)
    const userId = req.query.userId; 

    if (!userId) {
      return res.status(400).json({ message: "Keine User-ID übermittelt" });
    }

    const user = await User.findByPk(userId); 
    
    if (!user) {
      return res.status(404).json({ message: "Penner nicht gefunden" });
    }

    // Antwortet mit den echten Werten aus der Datenbank
    res.json({
      username: user.username,
      money: user.money,
      bottles: user.bottles,
      points: user.points
    });
  } catch (error) {
    console.error("Fehler in getNavbarData:", error);
    res.status(500).json({ message: "Fehler beim Laden der Navbar-Daten" });
  }
};

// Alles zusammen exportieren
module.exports = {
  addPoints,
  subtractPoints,
  getNavbarData, 
};
