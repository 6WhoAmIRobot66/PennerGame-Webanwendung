import React, { useEffect, useState } from "react";
import { useAuth } from "../../api/auth/AuthProvider";
import axios from "axios";
import "../../App.css";

const UserDashboard = () => {
  const { user, setUser } = useAuth();
  const [isCollecting, setIsCollecting] = useState(false);
  const [timeLeft, setTimeLeft] = useState(0); // Sekunden für den Countdown

  useEffect(() => {
    const saved = localStorage.getItem("user");
    if (saved && !user) setUser(JSON.parse(saved));
  }, [user, setUser]);

  // Timer-Logik
  useEffect(() => {
    if (timeLeft <= 0) {
      if (isCollecting) setIsCollecting(false);
      return;
    }
    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft, isCollecting]);

  const startCollecting = async () => {
    if (!user) return;

    setIsCollecting(true);
    setTimeLeft(600); // 10 Minuten = 600 Sekunden

    try {
      // API-Call an dein Backend (Port 5001)
      const response = await axios.post("http://localhost:5001/api/game/collect-bottles", {
        userId: user.id
      });

      // Wir warten hier nicht auf den Timer, sondern updaten die DB sofort
      // (Im echten Spiel würde das Backend den Zeitpunkt prüfen)
      const updatedUser = { ...user, bottles: response.data.newBottleCount };
      setUser(updatedUser);
      localStorage.setItem("user", JSON.stringify(updatedUser));

      alert(response.data.message);
    } catch (err) {
      alert(err.response?.data?.msg || "Fehler beim Sammeln!");
      setIsCollecting(false);
      setTimeLeft(0);
    }
  };

  const sellBottles = async () => {
    try {
      const response = await axios.post("http://localhost:5001/api/game/sell-bottles", {
        userId: user.id
      });
      const updatedUser = { ...user, money: response.data.newMoney, bottles: 0 };
      setUser(updatedUser);
      localStorage.setItem("user", JSON.stringify(updatedUser));
      alert(response.data.message);
    } catch (err) {
      alert("Fehler beim Verkauf!");
    }
  };

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s < 10 ? "0" : ""}${s}`;
  };

  return (
    <div className="user-dashboard" style={{ padding: '20px', color: '#fff', background: '#1a1a1a', minHeight: '100vh' }}>
      <h1>Hauptquartier: {user?.username}</h1>

      <div className="dashboard-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>

        {/* STATS BOX */}
        <div className="stats-box" style={{ background: '#333', padding: '20px', borderRadius: '10px' }}>
          <h3>Dein Status</h3>
          <p>💰 Bargeld: <strong>{parseFloat(user?.money).toFixed(2)} €</strong></p>
          <p>🍾 Flaschen: <strong>{user?.bottles || 0}</strong></p>
          <p>🎯 Geschick: {user?.dex}</p>
        </div>

        {/* AKTIONEN BOX */}
        <div className="actions-box" style={{ background: '#333', padding: '20px', borderRadius: '10px' }}>
          <h3>Aktionen</h3>

          <button
            onClick={startCollecting}
            disabled={isCollecting}
            style={{
              width: '100%', padding: '15px', marginBottom: '10px',
              background: isCollecting ? '#555' : '#f0ad4e', color: '#fff', border: 'none', cursor: 'pointer' 
            }}
          >
            {isCollecting ? `Sammle Flaschen... (${formatTime(timeLeft)})` : "10 Min. Flaschen sammeln"}
          </button>

          <button
            onClick={sellBottles}
            disabled={isCollecting}
            style={{ width: '100%', padding: '15px', background: '#5cb85c', color: '#fff', border: 'none', cursor: 'pointer' }}
          >
            Pfandflaschen wegbringen
          </button>
        </div>

      </div>
    </div>
  );
};

export default UserDashboard;
