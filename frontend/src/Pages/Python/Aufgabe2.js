import React, { useState } from "react";
import Hint from "../../images/hint2_python.png";

function Aufgabe2() {
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
  return (
    <div className="task-description">
      <h2>Aufgabe2</h2>
      <p>
        Schreibe ein Python-Programm, das überprüft, ob ein eingegebenes Wort
        ein Palindrom ist oder nicht. Ein Palindrom ist ein Wort, das vorwärts
        und rückwärts gelesen dasselbe ist, z.B. "anna" oder "level".
      </p>
      <p>
        Schritte:
        <ol>
          <li>
            Erhalte das Eingabewort vom Benutzer. Überprüfe, ob das Wort
            vorwärts und rückwärts gelesen dasselbe ist. Gib eine entsprechende
            Nachricht aus, ob das Wort ein Palindrom ist oder nicht.
          </li>
        </ol>
      </p>
    </div>
  );
}

export default Aufgabe2;
