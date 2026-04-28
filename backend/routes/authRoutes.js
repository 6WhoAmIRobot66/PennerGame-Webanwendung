const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

// Route für die Benutzerregistrierung
router.post("/register", authController.registerUser);

// Route für die Benutzeranmeldung
router.post("/login", authController.loginUser);

module.exports = router;
