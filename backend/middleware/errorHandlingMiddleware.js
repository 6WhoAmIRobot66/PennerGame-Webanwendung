const logger = require("winston");

function errorHandlingMiddleware(err, req, res, next) {
  logger.error(`Fehler: ${err.message}`);
  res.status(500).json({ message: "Interner Serverfehler!" });
}

module.exports = errorHandlingMiddleware;
