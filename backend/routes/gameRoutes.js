const express =require('express');
const router = express.Router();
const gameController = require('../controllers/gameController');
// const authenticateToken = require('../middleware/authenticateToken'); // Später aktivieren

router.post('/collect', gameController.collectBottles);

module.exports = router;
