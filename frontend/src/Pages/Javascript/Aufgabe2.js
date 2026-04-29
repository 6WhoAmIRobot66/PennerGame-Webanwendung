import React, { useState } from "react";
import hint3 from "../../images/hint3.png";
function Aufgabe2() {
  const [hintImageVisible, setHintImageVisible] = useState(false);

  const handleHintClick = () => {
    setHintImageVisible(true);
  };

  return (
    <div className="App">
      <h1>Jacascript </h1>
      <TaskDescription />
      {/* Überprüfen, ob das Bild sichtbar ist, und es anzeigen, wenn nötig */}
      {hintImageVisible && <img src={hint3} alt="Hint Image" />}
      <button onClick={handleHintClick}>Hint</button>
    </div>
  );
}

function TaskDescription() {
  return (
    <div className="task-description">
      <h2>Aufgabe2 </h2>
      <p>
        Erstelle ein einfaches Zahlenraten-Spiel, in dem der Computer eine
        zufällige Zahl zwischen 1 und 100 generiert, und der Spieler versucht,
        diese Zahl zu erraten.
      </p>
      <p>
        Schritte:
        <ol>
          <li>
            Der Computer generiert eine zufällige Zahl zwischen 1 und 100 und
            speichert sie.
          </li>
          <li>Der Spieler gibt eine Zahl ein.</li>
          <li>
            Das Spiel überprüft, ob die vom Spieler eingegebene Zahl mit der
            generierten Zahl übereinstimmt, zu niedrig oder zu hoch ist. Je
            nachdem, ob die Zahl zu niedrig, zu hoch oder korrekt ist, gibt das
            Spiel dem Spieler einen entsprechenden Hinweis.
          </li>
          <li>
            Der Spieler hat eine begrenzte Anzahl von Versuchen, um die richtige
            Zahl zu erraten. Das Spiel zählt die Anzahl der Versuche und gibt am
            Ende aus, wie viele Versuche der Spieler benötigt hat, um die
            richtige Zahl zu erraten.
          </li>
        </ol>
      </p>
    </div>
  );
}

export default Aufgabe2;
