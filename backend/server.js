const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const loggerMiddleware = require("./middleware/loggingMiddleware");
const errorHandlingMiddleware = require("./middleware/errorHandlingMiddleware");
const corsMiddleware = require("./middleware/corsMiddleware");
const routes = require("./routes");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(loggerMiddleware);
app.use(errorHandlingMiddleware);
app.use(corsMiddleware);
app.use("/", routes);

module.exports = app;
