const User = require("../models/Users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

// FIX: Fallback hinzugefügt, damit jwt.sign nicht abstürzt, wenn das Secret fehlt
const jwtSecret = process.env.JWT_SECRET || "pennergame_fallback_secret_123";

exports.registerUser = async (req, res) => {
  console.log("--- REGISTRIERUNGS-VERSUCH ---", req.body);
  try {
    const { firstName, lastName, email, password } = req.body;

    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ message: "Email already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      username: firstName + lastName,
      email,
      password: hashedPassword,
      money: 10.00,
      max_money: 20.00,
      bottles: 0,
      dex: 1
    });

    const token = jwt.sign(
      { userId: newUser.id, email: newUser.email },
      jwtSecret
    );

    res.status(201).json({ message: "User registered successfully", token, user: newUser });
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

exports.loginUser = async (req, res) => {
  console.log("--- LOGIN-VERSUCH EMPFANGEN ---");
  console.log("Daten vom Frontend:", req.body);

  try {
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email } });

    if (!user) {
      console.log("Login gescheitert: Email nicht gefunden ->", email);
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      console.log("Login gescheitert: Passwort falsch für ->", email);
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Erfolg: Token erstellen
    const token = jwt.sign({ userId: user.id, email: user.email }, jwtSecret);

    console.log("LOGIN ERFOLGREICH für:", user.username);

    res.json({ user, token });
  } catch (error) {
    console.error("Error logging in user:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
