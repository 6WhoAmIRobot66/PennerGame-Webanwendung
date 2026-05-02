const User = require("../models/Users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const jwtSecret = process.env.JWT_SECRET || "pennergame_fallback_secret_123";

// ======================
// REGISTER
// ======================
exports.registerUser = async (req, res) => {
  try {
    const { username, email, password, penner_name } = req.body;

    // Existenzprüfung
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ message: "Email bereits vergeben" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      username: username || email.split('@')[0],
      email,
      password: hashedPassword,
      penner_name: penner_name || username || "Penner_" + Date.now().toString().slice(-4),
      
      // PennerGame Startwerte
      money: 10.00,
      att: 5,
      def: 5,
      dex: 5,
      cleanliness: 100,
      promille: 0,
      level: 1,
      exp: 0,
      last_bottle_collect: null,
    });

    const token = jwt.sign(
      { userId: newUser.id, email: newUser.email },
      jwtSecret,
      { expiresIn: '7d' }
    );

    res.status(201).json({ 
      message: "Registrierung erfolgreich", 
      token, 
      user: newUser 
    });

  } catch (error) {
    console.error("Register Error:", error);
    res.status(500).json({ message: "Serverfehler bei Registrierung" });
  }
};

// ======================
// LOGIN
// ======================
exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(401).json({ message: "Falsche Zugangsdaten" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Falsche Zugangsdaten" });
    }

    const token = jwt.sign(
      { userId: user.id, email: user.email },
      jwtSecret,
      { expiresIn: '7d' }
    );

    res.json({ 
      message: "Login erfolgreich", 
      token, 
      user 
    });

  } catch (error) {
    console.error("Login Error:", error);
    res.status(500).json({ message: "Serverfehler beim Login" });
  }
};