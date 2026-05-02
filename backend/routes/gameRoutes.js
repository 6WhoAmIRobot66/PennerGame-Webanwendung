const express = require('express');
const router = express.Router();
const gameController = require('../controllers/gameController');

// Flaschen sammeln
router.post('/collect-bottles', gameController.collectBottles);

// Flaschen verkaufen (neu hinzugefügt)
router.post('/sell-bottles', gameController.sellBottles);

module.exports = router;
