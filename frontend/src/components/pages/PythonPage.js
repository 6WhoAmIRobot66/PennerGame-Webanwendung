import React from "react";
import "../../App.css";

function PythonPage() {
  return (
    <div className="htmlpage-container">
      <div className="htmlpage-overlay">
        <h1 className="htmlpage-text">Python</h1>
        <div className="contentfield">
          <p className="textfield">
            <h2>Geschichte</h2>
            Guido van Rossum entwickelte Python Anfang der Neunziger Jahre,
            während er am niederländischen Zentrum für Mathematik und Informatik
            in Amsterdam beschäftigt war. Der Name Python kam zustande, weil van
            Rossum ein großer Fan der britischen Komikergruppe Monty Python war.
            Pythoncode ist oft wesentlich kürzer als vergleichbarer Quellcode
            einer anderen Programmiersprache, wird aber auch häufig mit Zitaten
            aus Monty Python angereichert. Da die Struktur durch Einrückungen
            gebildet wird, kann auf Klammern verzichtet werden. Zudem verfügt
            Python über relativ wenige Schlüsselwörter, die das Erlernen der
            Sprache vereinfachen. Grundlegendes Ziel von Python war es, eine
            einfache und übersichtliche Sprache zu schaffen, die mit einer
            reduzierten, aber erweiterbaren Standardbibliothek ausgestattet ist.
            Der Vorläufer von Python war die Sprache ABC, deren
            Standardbibliothek sehr komplex und nicht erweiterbar ist.
            <br />
            <br />
            <h2>Funktionsweise</h2>
            Python unterstützt mehrere unterschiedliche Programmierparadigmen.
            Im Grunde ist es eine Multiparadigmensprache, die es erlaubt, die
            Vorteile verschiedener Programmierparadigmen zu nutzen. So können
            zeitkritische Programmteile zum Beispiel im Nachhinein in C oder C++
            geschrieben werden. Python unterstützt strukturierte,
            objektorientierte, aspektorientierte und funktionale
            Programmierstile. Teilweise geschieht dies durch Teilelemente der
            Python-Sprache. Die Verwaltung von Datentypen erfolgt dynamisch. Das
            bedeutet, dass die Zuweisung von Datentypen und Werten oder
            Wertbereichen mithilfe von Referenzen während des Programmierens
            umgesetzt wird. Diese Referenzen fungieren als Zeiger für bestimmte
            Elemente, die zur Laufzeit des Programms überprüft werden können.
            Der Python-Interpreter, der den Quellcode parst, analysiert und
            ausführt, verfügt zudem über einen interaktiven Modus. Somit können
            Anfänger direkt sehen, was das Programm macht gerade beim Erlernen
            der Sprache ist dies ein entscheidender Vorteil.
            <br />
            <br />
            <h2>Charakteristika</h2>
            Datentypen: Mit Zahlen, Strings, Listen, Tupel und Sequenzen sowie
            Wörterbüchern stehen verschiedene Standarddatentypen zur Verfügung.
            Den Kern von Python bilden die dynamischen Datentypen: Sie lassen
            sich begutachten, verändern und erzeugen.
            <br />
            <br />
            Kontrollstrukturen: Gruppierungen erfolgen mithilfe von
            Einrückungen. Bedingte Verzweigungen werden mit if, elif und else
            realisiert. Schleifen werden mit for, break und continue umgesetzt.
            Nützlich sind die range- und len-Funktionen, mit denen über Indizes
            einer Sequenz iteriert werden kann. Funktionen werden mit def
            bestimmt. Bekannte Schlüsselwörter aus der funktionalen
            Programmierung wurden ebenfalls integriert: Mit map, filter, reduce
            und lamdba lassen sich Funktionen, Elemente und Sequenzen erzeugen,
            ansprechen und verändern.
            <br />
            <br />
            Syntax: Viele Funktionen in Python werden über leicht erlernbare
            Schlüsselwörter abgebildet, die sich am ANSI-C oder POSIX-Standard
            orientieren. So finden sich Programmierer schneller zurecht.
            <br />
            <br />
            Klassen als Objekte: Klassen sind in Python Objekte, die aus
            Methoden und Attributen bestehen. Dabei sind Methoden Funktionen
            einer Klasse und Attribute sind die dazugehörigen Daten. Vererbung
            und Mehrfachvererbung sind möglich.
            <br />
            <br />
            Module: In Python stehen zahlreiche Standardmodule oder Bibliotheken
            zur Verfügung. Sie werden zunächst importiert, um dann Funktionen,
            Variablen und Klassen des Moduls verwenden zu können. Für viele
            Anwendungsfälle stehen spezielle Module bereit.
            <br />
            <br />
            Fehlerbehandlung: Jeder Fehler im Programm wird von Python sofort
            bemerkt. Der Nutzer erhält eine Meldung mit der entsprechenden
            Codezeile und weiteren Informationen. Mit dem try-except-Befehlen
            sind Ausnahmebehandlungen möglich, wobei Ausnahmen auch selbst
            definiert werden können, um Programmfehler vorab zu vermeiden.
            <br />
            <br />
            <a
              className="link"
              href="https://www.w3schools.com/python/default.asp"
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

export default PythonPage;
