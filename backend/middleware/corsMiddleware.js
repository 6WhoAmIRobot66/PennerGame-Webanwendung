const cors = require("cors");

// CORS-Konfiguration
const corsOptions = {
  origin: "http://localhost:3000", // Erlaubte Ursprünge
  optionsSuccessStatus: 200, // Erfolgsstatus für OPTIONS-Anfragen
};

module.exports = cors(corsOptions);
