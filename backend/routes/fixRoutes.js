const express = require('express');
const router = express.Router();
const { User } = require('../models');
const bcrypt = require('bcrypt');

router.get('/fix-user', async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash("hallo123", 10);
        await User.update({ password: hashedPassword }, { where: { id: 1 } });
        res.send("Passwort verschlüsselt! Login bereit.");
    } catch (err) {
        res.status(500).send(err.message);
    }
});
module.exports = router;
