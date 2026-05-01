const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes");
const loggerMiddleware = require("./middleware/loggingMiddleware");
const errorHandlingMiddleware = require("./middleware/errorHandlingMiddleware");

const app = express();

// 1. CORS KONFIGURATION (Muss ganz oben stehen)
const corsOptions = {
  origin: process.env.NODE_ENV === 'production' 
    ? "https://deine-pennergame-seite.de" 
    : "http://localhost:3000",
  credentials: true,
};

app.use(cors(corsOptions));

// 2. BODY PARSER (Muss VOR den Routen stehen, damit req.body gelesen werden kann)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// 3. LOGGING
app.use(loggerMiddleware);

// 4. ROUTEN
app.use("/", routes);

// 5. ERROR HANDLING (Muss immer als Letztes stehen)
app.use(errorHandlingMiddleware);

module.exports = app;
