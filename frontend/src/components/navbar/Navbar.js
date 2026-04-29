import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "../buttons/Button";
import "./Navbar.css";
import { useAuth } from "../../api/auth/AuthProvider";
import Avatar from "@mui/material/Avatar";

function Navbar() {
  const { user, handleLogout } = useAuth();
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  useEffect(() => {
    const showButton = () => {
      if (window.innerWidth <= 960) setButton(false);
      else setButton(true);
    };
    window.addEventListener("resize", showButton);
    return () => window.removeEventListener("resize", showButton);
  }, []);

  return (
    <nav className="Navbar">
      <div className="navbar-container">
        {/* LOGO im Retro-Look */}
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          PENNERGAME.DE
          <i className="fa-solid fa-skull-crossbones" style={{marginLeft: '10px'}}/>
        </Link>

        {/* IN-GAME STATS (nur wenn eingeloggt) */}
        {user && (
          <div className="nav-ingame-stats">
            <span className="stat-money">€ 344.319</span>
            <span className="stat-caps">6507 KK</span>
          </div>
        )}

        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>

        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>Übersicht</Link>
          </li>
          <li className="nav-item">
            <Link to="/quiz" className="nav-links" onClick={closeMobileMenu}>Banden</Link>
          </li>
          <li className="nav-item">
            <Link to="/sandbox" className="nav-links" onClick={closeMobileMenu}>Stadt</Link>
          </li>
        </ul>

        <div className="nav-auth-section">
          {button && !user && (
            <Button buttonStyle="btn--outline" path="/sign-in">LOGIN</Button>
          )}
          {user && (
            <div className="nav-user-info">
              <Avatar 
                alt="Penner Avatar" 
                src="/pictures/hacker.png" 
                sx={{ border: '2px solid #f1c40f', width: 35, height: 35 }}
              />
              {button && (
                <button className="pg-logout-btn" onClick={handleLogout}>Logout</button>
              )}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
