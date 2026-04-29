const User = require("../models/Users");
const bcrypt = require("bcrypt");

const authenticateUser = async (req, res, next) => {
  const { username, password } = req.body;

  try {
    // Finde den Benutzer in der Datenbank
    const user = await User.findOne({ where: { username } });
    if (!user) {
      return res.status(404).json({ message: "Benutzer nicht gefunden" });
    }

    // Überprüfe das Passwort des Benutzers
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res
        .status(401)
        .json({ message: "Ungültige Anmeldeinformationen" });
    }

    // Füge den authentifizierten Benutzer zum Anforderungsobjekt hinzu
    req.user = user;
    next();
  } catch (error) {
    console.error("Fehler bei der Benutzeranmeldung:", error);
    res.status(500).json({ message: "Interner Serverfehler!" });
  }
};

module.exports = authenticateUser;
