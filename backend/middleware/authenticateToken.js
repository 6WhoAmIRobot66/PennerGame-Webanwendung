const jwt = require("jsonwebtoken");
require("dotenv").config();
const jwtSecret = process.env.JWT_SECRET;

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Unauthorized: Missing token" });
  }

  jwt.verify(token, jwtSecret, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "Unauthorized: Invalid token" });
    }

    // Zusätzliche Überprüfung für Benutzerzugriff
    if (!checkUserAccess(decoded)) {
      return res.status(403).json({ message: "Access forbidden" });
    }

    req.user = decoded;
    next();
  });
};

// Funktion zur Überprüfung von Benutzerzugriffen
const checkUserAccess = (decodedToken) => {
  // Hier können wir überprüfen, ob der Benutzer die erforderlichen Berechtigungen hat:
  return true; // Rückgabewert für Demonstration
};

module.exports = authenticateToken;
