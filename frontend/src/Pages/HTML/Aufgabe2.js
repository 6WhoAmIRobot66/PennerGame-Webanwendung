import React from "react";

function Aufgabe2() {
  return (
    <div className="App">
      <h1>HTML lernen mit React</h1>
      <TaskDescription />
    </div>
  );
}

function TaskDescription() {
  return (
    <div className="task-description">
      <h2>Aufgabe: Erstelle eine einfache Webanwendung mit React</h2>
      <p>
        Erstelle eine Webanwendung, die es Benutzern ermöglicht, ihre
        Lieblingsfilme anzuzeigen.
      </p>
      <p>
        Schritte:
        <ol>
          <li>Einrichtung des Projekts</li>
          <li>Komponenten erstellen</li>
          <li>Zustandsverwaltung</li>
          <li>HTML und CSS</li>
          <li>Interaktivität hinzufügen</li>
          <li>Testen</li>
        </ol>
      </p>
      <p>
        Zusatzaufgabe (optional):
        <ul>
          <li>Implementiere eine Suchfunktion</li>
          <li>Füge Filteroptionen hinzu</li>
        </ul>
      </p>
    </div>
  );
}

export default Aufgabe2;
