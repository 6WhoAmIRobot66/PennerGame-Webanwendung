const winston = require("winston");

// Definiere einen Dateitransport
const fileTransport = new winston.transports.File({ filename: "logfile.log" });

// Konfiguriere den Logger mit dem Dateitransport
const logger = winston.createLogger({
  transports: [fileTransport],
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
});

function loggingMiddleware(req, res, next) {
  logger.info(`${req.method} ${req.url}`);
  next();
}

module.exports = loggingMiddleware;
