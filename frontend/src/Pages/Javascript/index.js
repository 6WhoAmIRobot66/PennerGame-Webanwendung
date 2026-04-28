import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./JavaScript.module.css"; // Importiere die CSS-Datei ohne Klammern
import Aufgabe1 from "./Aufgabe1";
import Aufgabe2 from "./Aufgabe2";

const Javascript = () => {
  const [text, setText] = useState("");
  const welcomeText = "Willkommen zum Javascript Lernen!";
  const [aufgabe1Imported, setAufgabe1Imported] = useState(false); // Zustand für den Importstatus von Aufgabe 1
  const [aufgabe2Imported, setAufgabe2Imported] = useState(false); // Zustand für den Importstatus von Aufgabe 2

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
    // Hier könntest du die Logik für den Import der Aufgaben implementieren
    if (taskName === "Aufgabe 1") {
      setAufgabe1Imported(true); // Setze den Zustand, um anzuzeigen, dass Aufgabe 1 importiert wurde
    } else if (taskName === "Aufgabe 2") {
      setAufgabe2Imported(true); // Setze den Zustand, um anzuzeigen, dass Aufgabe 2 importiert wurde
    }
  };

  const redirectToLink = (link) => {
    window.location.href = link;
  };

  return (
    <div className="container">
      <h1>{text}</h1>
      <h2 style={{ marginTop: 0 }}>
        JavaScript ist eine verbreitete Programmiersprache. Als clientseitige
        Skriptsprache ist sie eine der Kerntechnologien des World Wide Web.
      </h2>
      {aufgabe1Imported && <Aufgabe1 />} {/* Aufgabe 1 anzeigen, wenn sie importiert wurde */}
      {aufgabe2Imported && <Aufgabe2 />} {/* Aufgabe 2 anzeigen, wenn sie importiert wurde */}
      {!aufgabe1Imported && !aufgabe2Imported && ( // Wenn keine Aufgabe importiert wurde
        <div className="buttons">
          <button onClick={() => importTask("Aufgabe 1")}>
            Aufgabe 1 importieren
          </button>
          <button onClick={() => importTask("Aufgabe 2")}>
            Aufgabe 2 importieren
          </button>
          <button
            onClick={() =>
              redirectToLink(
                "https://wiki.selfhtml.org/wiki/JavaScript/Tutorials"
              )
            }
          >
            Externer Link
          </button>
        </div>
      )}
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Javascript />
  </React.StrictMode>,
  document.getElementById("root")
);

export default Javascript;

