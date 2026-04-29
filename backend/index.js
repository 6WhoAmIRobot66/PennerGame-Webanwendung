const sequelize = require("./config/database");
const app = require("./server.js");
const PORT = process.env.PORT || 5050;

// Initialisierung Datenbank
sequelize
  .sync()
  .then(() => {
    console.log("Datenbankverbindung wurde erfolgreich hergestellt!");
  })
  .catch((err) => {
    console.error("Fehler beim Verbinden mit der Datenbank:", err);
  });

app.listen(PORT, () => {
  console.log(`Dieser Server läuft auf Port ${PORT}`);
});
