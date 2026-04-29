import React from "react";
import "../../App.css";

function JavaScriptPage() {
  return (
    <div className="htmlpage-container">
      <div className="htmlpage-overlay">
        <h1 className="htmlpage-text">JavaScript</h1>
        <div className="contentfield">
          <p className="textfield">
            <h2>Allgemein</h2>
            Bei JavaScript handelt es sich um eine Skriptsprache, die auf der
            Seite des Clients arbeitet. Mit Hilfe von JavaScript lässt sich die
            Funktionalität von Websites erhöhen, indem Inhalte verändert oder
            generiert werden. JavaScript wird eingesetzt, um CSS und HTML zu
            ergänzen.
            <br />
            <br />
            <h2>Einbindung</h2>
            Der JavaScript Code kann in HTML-Seiten eingebunden werden, damit
            diese an Funktionalität gewinnen. Hierfür gibt es mehrere
            Möglichkeiten: er kann zwischen den Tags stehen ("Inline-Variante"),
            er kann in einer externen Datei untergebracht sein, er kann ein
            Parameter von HTML-Tags sein und er kann in Form eines HTML-Links
            eingebaut werden. Bei der Einbindung in den HTML Code ist darauf zu
            achten, dass das Script keine Fehler aufweist. Somit kann das
            Entstehen eines Bugs vermieden werden, welches sich negativ auf die
            Suchmaschinenoptimierung auswirken könnte.
            <br />
            Eine Skriptsprache wie JavaScript sollte DOM umsetzen. Das steht für
            “Document Object Model” und ist eine Empfehlung des W3C. Es handelt
            sich um ein allgemeines Modell für Objekte eines Dokuments.
            <br />
            <br />
            <h2>Anwendung</h2>
            JavaScript bietet viele verschiedene Anwendungsmöglichkeiten. Es
            können Seitenbesuche gezählt, Monatskalender eingeblendet oder
            Formulareingaben überprüft werden. Ein häufig genutztes Beispiel ist
            auch der Taschenrechner. In Webshops wird der Warenkorb häufig mit
            JavaScript umgesetzt. Als Erweiterung von JavaScript kann CommonJS
            dienen. Diese macht unter anderem Programmierschnittstellen möglich,
            welche die Implementierung in Anwendungen wie Datenbanken,
            Webservices und Desktop-Anwendungen geeignet sind.
            <br />
            <br />
            <h2>Sandbox-Prinzip</h2>
            Das Sandbox-Prinzip ist entwickelt worden, um den Nutzer vor
            Missbrauch durch JavaScript-Anwendungen zu schützen. Die Sandbox ist
            dabei eine Art Käfig, die die Sprache in ihrer Reichweite
            einschränkt. Eine Anwendung kann zum Beispiel nicht auf lokale
            Dateien zugreifen. Somit können Unbefugte weder Dateien auslesen,
            noch können sie hinein schreiben.
            <br />
            <br />
            <a
              className="link"
              href="https://www.w3schools.com/js/default.asp"
              target="_blank"
              rel="noreferrer"
            >
              Weitere Informationen hier!
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default JavaScriptPage;
