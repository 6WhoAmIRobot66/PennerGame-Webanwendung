import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./index.css";
const HTML = () => {
  const [text, setText] = useState("");
  const welcomeText = "Willkommen zum HTML Lernen!";
  useEffect(() => {
    let interval;
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
  };
  const redirectToLink = (link) => {
    window.location.href = link;
  };
  return (
    <div className="container">
      <h1>{text}</h1>
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
              "https://code-crowd.de/blog/html-tutorial-fuer-anfaenger-deutsch/"
            )
          }
        >
          Externer Link
        </button>
      </div>
    </div>
  );
};
ReactDOM.render(
  <React.StrictMode>
    <HTML />
  </React.StrictMode>,
  document.getElementById("root")
);
export default HTML;
