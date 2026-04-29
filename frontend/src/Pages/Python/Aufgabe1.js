import React, { useState } from "react";
import Hint from "../../images/super_hint1_Python.png";

function Aufgabe1() {
  const [hintImageVisible, setHintImageVisible] = useState(false);

  const handleHintClick = () => {
    setHintImageVisible(true);
  };

  return (
    <div className="App">
      <h1>Python</h1>
      <TaskDescription handleHintClick={handleHintClick} />
      {/* Überprüfen, ob das Bild sichtbar ist, und es anzeigen, wenn nötig */}
      {hintImageVisible && <img src={Hint} alt="Hint Image" />}
      <button onClick={handleHintClick}>Hint</button>
    </div>
  );
}

function TaskDescription({ handleHintClick }) {
  const handleLoginClick = () => {
    console.log("Der Button wurde geklickt!");

    alert("Hier ist ein Hinweis für die Aufgabe!");
  };

  return (
    <div className="task-description">
      <h2>Aufgabe1</h2>
      <p>
        Schreibe ein Python-Programm, das den Durchschnitt von einer Liste von
        Zahlen berechnet.
      </p>
      <p>
        Schritte:
        <ol>
          <li>
            Erstelle eine Liste von Zahlen. Schreibe eine Funktion, die den
            Durchschnitt dieser Zahlen berechnet. Gib den Durchschnitt aus.
          </li>
        </ol>
      </p>
    </div>
  );
}

export default Aufgabe1;
