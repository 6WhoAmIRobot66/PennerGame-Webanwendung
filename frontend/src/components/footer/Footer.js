import React from "react";
import "./Footer.css";
import { Button } from "../buttons/Button";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Verkaufe noch heute HIER deine Seele und erlange grenzenlose MACHT!
        </p>
        <p className="footer-subscription-text">Oder auch nicht...</p>
        <div className="input-areas">
          <form>
            <input
              type="email"
              name="email"
              placeholder="Deine Seele"
              className="footer-input"
            />
            <Button buttonStyle="btn--outline">Verkaufen...</Button>
          </form>
        </div>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-item">
            <h2>About us</h2>
            <Link to="/sign-up">Hier geht's los</Link>
            <Link to="/teampage">Wer wir sind</Link>
            <Link to="/">Impressum</Link>
            <Link to="/">AGB's</Link>
          </div>
          <div className="footer-link-item">
            <h2>Kontakt</h2>
            <Link to="/">Mail</Link>
            <Link
              to="https://dlsueilsetm4b.cloudfront.net/tonerpartner.de/out/media/image/faxgeraet_philips.jpg"
              target="_blank"
            >
              Fax
            </Link>
            <Link to="https://www.brieftaube.de/" target="_blank">
              Brieftaube
            </Link>
            <Link to="/">Social Media</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-item">
            <h2>WERDE REICH!</h2>
            <Link to="/">KOMM IN DIE GRUPPE</Link>
            <Link to="/">50K UMSATZ PRO WOCHE</Link>
            <Link to="/">Google ADS</Link>
            <Link to="/">Affiliatepartner</Link>
          </div>
          <div className="footer-link-item">
            <h2>Easter Eggs</h2>
            <Link to="/">Super Secret's</Link>
            <Link to="/">Findet niemand!</Link>
            <Link to="/">hoffentlich...</Link>
            <Link to="/GTAVI" className="game-link">
              1337
            </Link>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              TechSmarter <i className="fa-solid fa-seedling" />
            </Link>
            <small className="website-right">TeSm © 2024</small>
            <div className="social-icons">
              <Link
                className="social-icon-link fun"
                to="https://r.mtdv.me/watch?v=Sz03rJAtNw"
                target="_blank"
                aria-label="Bitjoin"
              >
                Free Bitcoins<i className="fa-brands fa-bitcoin"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
