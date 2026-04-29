import React, { useState, useEffect } from "react"; // useEffect hinzugefügt
import Home from "../components/pages/Home";
import Navbar from "../components/navbar/Navbar";
import "./LandingPage.css";

function LandingPage() {
  const [isUnlocked, setIsUnlocked] = useState(false);

  // Diese Funktion steuert den Titel im Browser-Tab
  useEffect(() => {
    if (!isUnlocked) {
      document.title = "Login"; // Titel für die Login-Maske
    } else {
      document.title = "Pennergame - Home"; // Titel nach dem Login
    }
  }, [isUnlocked]); // Wird jedes Mal ausgeführt, wenn sich der Login-Status ändert

  const handleLogin = (e) => {
    e.preventDefault();
    setIsUnlocked(true);
  };

  if (isUnlocked) {
    return (
      <>
        <Navbar />
        <Home />
      </>
    );
  }

  return (
    <div className="login-page">
      <form className="login-card" onSubmit={handleLogin} action="/" method="POST">
        <h1>Login</h1>

        <input
          type="text"
          name="username"
          id="login_username"
          autoComplete="username"
          placeholder="Benutzername"
          className="login-input"
          required
        />

        <input
          type="password"
          name="password"
          id="login_password"
          autoComplete="current-password"
          placeholder="Passwort"
          className="login-input"
          required
        />

        <button type="submit" className="login-button">
          Anmelden
        </button>
      </form>
    </div>
  );
}

export default LandingPage;