import React from "react";
import "../../App";
import "./TopV.css"; // Der Button-Import wurde hier gelöscht

function TopV() {
  return (
    <div className="eyecatch-container">
      {/* Nur noch das Bild in der Mitte */}
      <img 
        src="/pictures/zettel.png" 
        className="eyecatch-center-img" 
        alt="Zettel" 
      />
      
      {/* Der eyecatch-btns Bereich wurde komplett entfernt */}
    </div>
  );
}

export default TopV;