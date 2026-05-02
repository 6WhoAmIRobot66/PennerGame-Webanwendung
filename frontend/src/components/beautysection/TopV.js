import React from "react";
import "./TopV.css";
import { Button } from "../buttons/Button";
import bgImage from "./reeperbahn_hintergrund.jpg"; // Hier das Bild importieren

function eyecatch() {
  return (
    <div
      className="eyecatch-container"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="paper-overlay">
        <div className="content-box">
          <h1 className="landing-title">PENNERGAME.DE</h1>
          <p className="landing-subtitle">Das Original aus Hamburg-St. Pauli</p>

          <div className="landing-text">
            <p>Werde vom Flaschensammler zum Schlossbesitzer. Schnapp dir deinen Hund, such im Müll nach Brauchbarem und gründe deine eigene Bande!</p>
          </div>

          <div className="eyecatch-btns">
            <Button path="/sign-up" buttonStyle="btn--primary" buttonSize="btn--large">
              JETZT KOSTENLOS SPIELEN
            </Button>
            <Button path="/sign-in" buttonStyle="btn--outline" buttonSize="btn--large">
              LOGIN
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default eyecatch;
