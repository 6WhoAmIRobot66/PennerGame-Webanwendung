import React, { useState, useEffect } from "react";
import styles from "./Python.module.css";
import Aufgabe1 from "./Aufgabe1";
import Aufgabe2 from "./Aufgabe2";

const Python = () => {
  const [text, setText] = useState("");
  const welcomeText = "Willkommen zum Python Lernen!";
  const [aufgabe1Imported, setAufgabe1Imported] = useState(false);
  const [aufgabe2Imported, setAufgabe2Imported] = useState(false);

  let interval;

  useEffect(() => {
    const animateText = () => {
      let currentIndex = 0;
      interval = setInterval(() => {
        if (currentIndex <= welcomeText.length) {
          setText(welcomeText.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(interval);
        }
      }, 100);
    };

    animateText();

    return () => clearInterval(interval);
  }, []);

  const importTask = (taskName) => {
    console.log(`Importiere Aufgabe: ${taskName}`);

    if (taskName === "Aufgabe 1") {
      setAufgabe1Imported(true);
    } else if (taskName === "Aufgabe 2") {
      setAufgabe2Imported(true);
    }
  };

  const redirectToLink = (link) => {
    window.location.href = link;
  };

  return (
    <div className={styles.container}>
      <h2>Python</h2>
      <p>
        Python ist eine interpretierte, hochlevelige und allzwecktaugliche
        Programmiersprache, die in vielen Bereichen wie Webentwicklung,
        Datenanalyse, KI usw. eingesetzt wird.
      </p>
      {aufgabe1Imported && <Aufgabe1 />}{" "}
      {/* Aufgabe 1 anzeigen, wenn sie importiert wurde */}
      {aufgabe2Imported && <Aufgabe2 />}{" "}
      {/* Aufgabe 2 anzeigen, wenn sie importiert wurde */}
      {!aufgabe1Imported &&
        !aufgabe2Imported && ( // Wenn keine Aufgabe importiert wurde
          <div className="buttons">
            <button onClick={() => importTask("Aufgabe 1")}>
              Aufgabe 1 importieren
            </button>
            <button onClick={() => importTask("Aufgabe 2")}>
              Aufgabe 2 importieren
            </button>
            <button
              onClick={() => redirectToLink("https://www.python-lernen.de/")}
            >
              Externer Link
            </button>
          </div>
        )}
    </div>
  );
};

export default Python;
