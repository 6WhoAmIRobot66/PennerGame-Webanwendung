require('dotenv').config();
const sequelize = require("./config/database");
const app = require("./server.js");
const cors = require('cors'); // CORS nicht vergessen!
const testRoutes = require('./routes/testRoutes'); // Import der Test-Route

const PORT = process.env.PORT || 5001;

// Initialisierung Datenbank mit "alter: true"
// Das sorgt dafür, dass Sequelize das User-Model mit den neuen Feldern in XAMPP abgleicht
sequelize
  .sync({ alter: true }) 
  .then(() => {
    console.log("Datenbankverbindung wurde erfolgreich hergestellt und Tabellen aktualisiert!");
  })
  .catch((err) => {
    console.error("Fehler beim Verbinden mit der Datenbank:", err);
  });

app.listen(PORT, () => {
  console.log(`Dieser Server läuft auf Port ${PORT}`);
});
