import React from "react";
import "../../App.css";

function HTMLPage() {
  return (
    <div className="htmlpage-container">
      <div className="htmlpage-overlay">
        <h1 className="htmlpage-text">HTML</h1>
        <div className="contentfield">
          <p className="textfield">
            <h2>Sturktur</h2>
            Hypertext Markup Language ist einfach zu editieren und gleicht einer
            Interpretersprache. HTML-Code kann mit beliebigen Texteditor
            geschrieben werden und hat keine speziellen Anforderungen bei der
            Erstellung. Ein Kennzeichen von HTML ist die Verwendung von Tags.
            Tags sind definierte Elemente, die standardisiert sind. Durch diese
            Elemente wird eine hierarchische Struktur erreicht. Beim HTML Code
            sollte darauf geachtet werden, dass alle integrierten Skripte vom
            Browser geladen werden können. Sobald nämlich ein Fehler auftritt,
            entsteht ein Bug, welches sich negativ auf die
            Suchmaschinenoptimierung auswirken kann.
            <br />
            <br />
            <h2>HTML-Head</h2>
            Im Head (oder: HTML-Kopf) werden Meta-Informationen einer Seite
            festgelegt, die nicht im Browser angezeigt werden. Dort werden
            wichtige Meta-Tags untergebracht, die für Suchmaschinencrawler
            relevant sind (z.B. Description-Tag). Damit der Browser die im HTML
            Head enthaltene Metadaten korrekt lesen und diese mit den richtigen
            Anwendungen ausführen kann, können viele dieser Daten mit MIME
            definiert werden.
            <br />
            <br />
            <h2>HTML-Body</h2>
            Im Body (oder: HTML-Körper) befinden sich die eigentlichen Inhalte,
            die mittels eines Browsers visuell dargestellt werden. Hier werden
            unter anderem das CSS eines Dokuments, Mediainhalte,
            Texthervorhebungen und Überschriften hinterlegt.
            <br />
            <br />
            <h2>Syntax</h2>
            Bei der Verwendung der HTML-Sprache ist es meist essentiell, die
            richtige Syntax zu verwenden. So werden Tags paarweise deklariert:
            durch einen Start-Tag z.B. &lt;head&gt; und ein End-Tag z.B.
            &lt;/head&gt;. Die Definition wird in der Dokumenttypdefinition
            (DTD) standardmäßig definiert. Durch einen HTML Validator kann diese
            Syntax automatisch auf Fehler im Dokument überprüft werden.
            <br />
            <br />
            <a
              className="link"
              href="https://www.w3schools.com/html/default.asp"
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

export default HTMLPage;
