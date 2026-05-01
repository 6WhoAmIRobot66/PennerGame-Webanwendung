const express = require('express');
const router = express.Router();
const { User } = require('../models');

router.get('/create-test-user', async (req, res) => {
    try {
        const user = await User.create({
            username: "TestPenner",
            email: "test@penner.de",
            password: "123",
            money: 10.00,
            max_money: 20.00,
            dex: 1
        });
        res.json({ msg: "User erstellt!", user });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
