import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "../buttons/Button";
import "./Navbar.css";
import { useAuth } from "../../api/auth/AuthProvider";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

function Navbar() {
  const { user, handleLogout } = useAuth();
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="Navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            TechSmarter
            <i className="fa-solid fa-seedling" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/quiz" className="nav-links" onClick={closeMobileMenu}>
                Quiz
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/sandbox"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Wissen
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/sign-up"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
          </ul>
          {button && !user && (
            <Button buttonStyle="btn--outline" path="/sign-in">
              SIGN IN
            </Button>
          )}
          {button && !user && (
            <Button buttonStyle="btn--outline" path="/sign-up">
              SIGN UP
            </Button>
          )}
          {button && user && (
            <Button onClick={handleLogout} buttonStyle="btn--outline" path="/">
              Logout
            </Button>
          )}
          {user && (
            <Stack direction="row" spacing={2}>
              <Avatar alt="Hacker Dude" src="/pictures/hacker.png" />
            </Stack>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
