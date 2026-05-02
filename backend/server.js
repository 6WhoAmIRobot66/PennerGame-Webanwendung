const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes");
const loggerMiddleware = require("./middleware/loggingMiddleware");
const errorHandlingMiddleware = require("./middleware/errorHandlingMiddleware");

const app = express();

// 1. CORS KONFIGURATION
const corsOptions = {
  origin: process.env.NODE_ENV === 'production' 
    ? "https://deine-pennergame-seite.de" 
    : "http://localhost:3000", // Dein React-Frontend
  credentials: true,
};

app.use(cors(corsOptions));

// 2. BODY PARSER
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// 3. LOGGING
app.use(loggerMiddleware);

// 4. ROUTEN (Hier habe ich das /api hinzugefügt)
// Jetzt sind deine Routen unter http://localhost:5001/api/... erreichbar
app.use("/api", routes);

// 5. ERROR HANDLING
app.use(errorHandlingMiddleware);

module.exports = app;
