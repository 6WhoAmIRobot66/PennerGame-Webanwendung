import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "../buttons/Button";
import "./Navbar.css";
import { useAuth } from "../../api/auth/AuthProvider";
import Avatar from "@mui/material/Avatar";
import axios from "axios"; // Neu für den API-Aufruf

function Navbar() {
  const { user, handleLogout } = useAuth();
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  
  // Neuer State für die Live-Stats aus Aiven
  const [pennerStats, setPennerStats] = useState({ money: "0.00", bottles: 0, points: 0 });

  // Neuer State für die Live-Stats aus Aiven
  const [pennerStats, setPennerStats] = useState({ money: "0.00", bottles: 0, points: 0 });

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  // Bestehende Logik für den Button
  useEffect(() => {
    const showButton = () => {
      if (window.innerWidth <= 960) setButton(false);
      else setButton(true);
    };
    window.addEventListener("resize", showButton);
    showButton(); // Initialer Check
    return () => window.removeEventListener("resize", showButton);
  }, []);

  // NEU: Lädt die echten Daten vom Backend
  useEffect(() => {
    const fetchPennerData = async () => {
      try {
        const response = await axios.get("http://localhost:5001/user/navbar-stats");
        setPennerStats(response.data);
      } catch (err) {
        console.error("Fehler beim Laden der Penner-Daten:", err);
      }
    };

    fetchPennerData();
    // Optional: Alle 60 Sek. aktualisieren
    const interval = setInterval(fetchPennerData, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <nav className="Navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          PENNERGAME.DE
          <i className="fa-solid fa-skull-crossbones" style={{marginLeft: '10px'}}/>
        </Link>

        {/* IN-GAME STATS (Jetzt mit Live-Daten statt statischem Text) */}
        {user && (
          <div className="nav-ingame-stats">
            <span className="stat-money">€ {pennerStats.money}</span>
            <span className="stat-caps">{pennerStats.bottles} Flaschen</span>
            <span className="stat-points" style={{marginLeft: '10px', color: '#f1c40f'}}>{pennerStats.points} Pkt.</span>
          </div>
        )}

        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>

        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/dashboard" className="nav-links" onClick={closeMobileMenu}>Übersicht</Link>
          </li>
          <li className="nav-item">
            <Link to="/banden" className="nav-links" onClick={closeMobileMenu}>Banden</Link>
          </li>
          <li className="nav-item">
            <Link to="/stadt" className="nav-links" onClick={closeMobileMenu}>Stadt</Link>
          </li>
        </ul>

        <div className="nav-auth-section">
          {button && !user && (
            <Button buttonStyle="btn--outline" path="/sign-in">LOGIN</Button>
          )}
          {user && (
            <div className="nav-user-info">
              <Avatar 
                alt={pennerStats.username || "Penner"} 
                src="/pictures/hacker.png" 
                sx={{ border: '2px solid #f1c40f', width: 35, height: 35 }}
              />
              {button && (
                <button className="pg-logout-btn" onClick={handleLogout} style={{ background: 'none', border: '1px solid #e74c3c', color: '#e74c3c', padding: '5px 10px', cursor: 'pointer', borderRadius: '4px' }}>
                  Logout
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
