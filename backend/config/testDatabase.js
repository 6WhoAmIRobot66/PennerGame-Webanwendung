const sequelize = require("./database");

async function testDatabaseConnection() {
  try {
    await sequelize.authenticate(); // Zugriff auf die authenticate-Methode der sequelize-Instanz
    console.log("Die Datenbankverbindung wurde erfolgreich hergestellt.");
  } catch (error) {
    console.error("Fehler beim Verbinden mit der Datenbank:", error);
    throw error;
  }
}

module.exports = { testDatabaseConnection };
