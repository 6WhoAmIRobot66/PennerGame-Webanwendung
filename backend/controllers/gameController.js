const { User } = require("../models");

// ======================
// FLASCHEN SAMMELN
// ======================
exports.collectBottles = async (req, res) => {
  try {
    const { userId } = req.body;
    const user = await User.findByPk(userId);
    
    if (!user) return res.status(404).json({ error: "Kein Penner gefunden" });

    const now = new Date();
    const tenMinutes = 10 * 60 * 1000;

    // Cooldown-Check mit deinem Feld 'last_collect'
    if (user.last_collect && (now - new Date(user.last_collect) < tenMinutes)) {
      const remaining = Math.ceil((tenMinutes - (now - new Date(user.last_collect))) / 1000 / 60);
      return res.status(400).json({ msg: `Warte noch ${remaining} Min., bis du wieder wühlen kannst.` });
    }

    // Würfeln: 5-15 Flaschen + DEX Bonus
    const found = Math.floor(Math.random() * 11) + 5 + Math.floor((user.dex || 1) / 2);

    await user.update({
      bottles: (user.bottles || 0) + found,
      last_collect: now
    });

    res.json({
      msg: `Du hast ${found} Flaschen gefunden!`,
      newBottleCount: user.bottles
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ======================
// FLASCHEN VERKAUFEN
// ======================
exports.sellBottles = async (req, res) => {
  try {
    const { userId } = req.body;
    const user = await User.findByPk(userId);

    if (!user || (user.bottles || 0) <= 0) {
      return res.status(400).json({ msg: "Keine Flaschen im Sack!" });
    }

    const pfand = 0.15;
    const verdienst = user.bottles * pfand;
    
    // Nutzt dein Feld 'max_money'
    const limit = parseFloat(user.max_money) || 20.00; 
    let neuesGeld = parseFloat(user.money || 0) + verdienst;
    let warnung = "";

    if (neuesGeld > limit) {
      neuesGeld = limit;
      warnung = " Dein Becher ist voll! Das restliche Geld ist weg.";
    }

    await user.update({
      money: neuesGeld,
      bottles: 0
    });

    res.json({
      msg: `Verkauft für ${verdienst.toFixed(2)}€!${warnung}`,
      newMoney: neuesGeld
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
