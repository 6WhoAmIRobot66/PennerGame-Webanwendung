const jwt = jest.createMockFromModule("jsonwebtoken");

// Hier gewünschte Funktionalität für das Mock-Modul implementieren
jwt.verify = jest.fn((token, secretKey, callback) => {
  // Hier kannst du das Verhalten für die jwt.verify-Methode im Test festlegen
  // Zum Beispiel:
  callback(null, { username: "testuser" });
});

module.exports = jwt;
