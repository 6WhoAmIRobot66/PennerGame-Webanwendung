import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        
        <div className="footer-links-row">
          <Link to="/">Impressum</Link>
          <Link to="/">Datenschutz</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
