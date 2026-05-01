const express = require('express');
const router = express.Router();
const { User } = require('../models');
const bcrypt = require('bcrypt'); // Importiere bcrypt

router.get('/create-test-user', async (req, res) => {
    try {
        // Passwort verschlüsseln, damit der Login-Controller es lesen kann
        const hashedPassword = await bcrypt.hash("123", 10);

        const user = await User.create({
            username: "TestPenner",
            email: "test@penner.de",
            password: hashedPassword, // Verschlüsselt speichern
            money: 10.00,
            max_money: 20.00,
            bottles: 0,
            dex: 1,
            att: 1,
            def: 1,
            points: 0
        });
        res.json({ msg: "Test-User mit verschlüsseltem Passwort erstellt!", user });
    } catch (err) {
        // Falls der User schon existiert, Fehlermeldung schöner machen
        res.status(500).json({ error: "Fehler beim Erstellen (User existiert evtl. schon?): " + err.message });
    }
});

module.exports = router;
