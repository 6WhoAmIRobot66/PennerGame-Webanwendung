import React from "react";
import Carditem from "../slots/Carditem";
import "../slots/Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1 className="techlinks">TechLinks</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <Carditem
              src="pictures/html5.png"
              text="Das gesamte HTML Wissen mit einem Klick"
              label="HTML"
              path="/htmlpage"
            />
            <Carditem
              src="pictures/javascript.png"
              text="Lerne noch heute JavaScript"
              label="JavaScript"
              path="/javascriptpage"
            />

            <Carditem
              src="pictures/python.webp"
              text="Python für Anfänger und Fortgeschrittene"
              label="Python"
              path="/pythonpage"
            />
            <Carditem
              src="pictures/DevOps.png"
              text="DevOps die Zukunft?"
              label="DevOps"
              path="https://roadmap.sh/"
              openNewTab={true}
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
