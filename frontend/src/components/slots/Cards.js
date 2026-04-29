import React from "react";
import Carditem from "./Carditem";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1>Check this out!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <Carditem
              src="pictures/network.jpg"
              text="Proof your knwoledge about the network!"
              label="Network"
              path="/quiz"
            />
            <Carditem
              src="pictures/code.jpg"
              text="Werbung?"
              label="Minimalism"
              path="https://github.com/sturmsrobot/Projektphase-main"
              openNewTab={true}
            />
          </ul>
          <ul className="cards__items">
            <Carditem
              src="pictures/purpledust.jpg"
              text="Gratis Süßigkeiten, versprochen!"
              label="HTML"
              path="/quiz"
            />
            <Carditem
              src="pictures/bluebrain.jpg"
              text="Hier könnte was anderes stehen"
              label="JavaScript"
              path="/quiz"
            />
            <Carditem
              src="pictures/coral.jpg"
              text="Hier könnte auch was anderes stehen"
              label="Python"
              path="/quiz"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
