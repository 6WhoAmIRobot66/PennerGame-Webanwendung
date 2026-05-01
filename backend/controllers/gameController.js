const { User } = require("../models");

exports.collectBottles = async (req, res) => {
  try {
    // Testweise ID 1 (Dein TestPenner)
    const user = await User.findByPk(1);
    if (!user) return res.status(404).json({ error: "Kein Penner gefunden" });

    const now = new Date();
    const tenMinutes = 10 * 60 * 1000;

    // Check Cooldown
    if (user.last_collect && (now - new Date(user.last_collect) < tenMinutes)) {
      const remaining = Math.ceil((tenMinutes - (now - new Date(user.last_collect))) / 1000 / 60);
      return res.status(400).json({ msg: `Du bist erschöpft. Warte noch ${remaining} Min.` });
    }

    // Flaschen würfeln: Zufall (1-5) + DEX Bonus
    const found = Math.floor(Math.random() * 5) + user.dex;

    await user.update({
      bottles: user.bottles + found,
      last_collect: now
    });

    res.json({
      msg: `Du hast ${found} Flaschen im Park gefunden!`,
      total: user.bottles
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
