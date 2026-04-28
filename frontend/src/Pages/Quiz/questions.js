// questions.js

const questions = {
  HTML: [
    {
      question: "Welches Tag wird verwendet, um eine Liste aufzuzählen?",
      options: ["<ul>", "<ol>", "<li>"],
      correctAnswer: "<ul>",
    },
    {
      question: "Welches Tag wird verwendet, um einen Link zu definieren?",
      options: ["<a>", "<link>", "<href>"],
      correctAnswer: "<a>",
    },
    {
      question: "Wie erstellt man eine geordnete Liste in HTML?",
      options: ["<ul>", "<ol>", "<list>"],
      correctAnswer: "<ol>",
    },
    {
      question: "Welches Tag wird verwendet, um Fettschrift in HTML zu machen?",
      options: ["<strong>", "<bold>", "<b>"],
      correctAnswer: "<strong>",
    },
    {
      question: "Wie fügt man Kommentare in HTML-Code ein?",
      options: ["// Kommentar", "<!-- Kommentar -->", "/* Kommentar */"],
      correctAnswer: "<!-- Kommentar -->",
    },
    {
      question: "Welches HTML-Element wird verwendet, um eine Bildunterschrift zu erstellen?",
      options: ["<caption>", "<description>", "<figcaption>"],
      correctAnswer: "<figcaption>",
    },
    {
      question: "Welches Tag wird verwendet, um einen Zeilenumbruch in HTML zu erzwingen?",
      options: ["<br>", "<nl>", "<linebreak>"],
      correctAnswer: "<br>",
    },
    {
      question: "Welches Attribut wird verwendet, um den Inhalt eines Bildes zu beschreiben?",
      options: ["src", "alt", "title"],
      correctAnswer: "alt",
    },
    {
      question: "Was bedeutet das Akronym HTML?",
      options: [" Hyper Text Markup Language", " High Tech Modern Language", "Home Tool Markup Language"],
      correctAnswer: " Hyper Text Markup Language",
    },
    {
      question: "Was ist der Zweck des <div>-Tags in HTML?",
      options: ["Zur Hervorhebung von Text", "Zur Erstellung von Tabellen", "Zur Definition einer Division oder eines Abschnitts in einem HTML-Dokument"],
      correctAnswer: "Zur Definition einer Division oder eines Abschnitts in einem HTML-Dokument",
    },
    {
      question: "Welches Tag wird verwendet, um eine Dropdown-Liste in HTML zu erstellen?",
      options: ["<dropdown>", "<select>", "<listbox>"],
      correctAnswer: "<select>",
    },
    {
      question: "Welches Attribut wird verwendet, um die Ausrichtung eines Bildes festzulegen?",
      options: ["align", "position", "orientation"],
      correctAnswer: "align",
    },
  ],
  Python: [
    {
      question: "Welche Methode wird verwendet, um eine Liste zu kopieren?",
      options: ["copy()","duplicate()","clone()"],
      correctAnswer: "copy()",
    },
    {
        question: "Welches Schlüsselwort wird verwendet, um aus einer Schleife herauszuspringen?",
        options: ["jump","break","exit"],
        correctAnswer: "break",
      },
      {
        question: "Welche Methode wird verwendet, um einen String in Python zu finden?",
        options: [" find()","search()","locate()"],
        correctAnswer: " find()",
      },
      {
        question: "Welche Methode wird verwendet, um eine Zeichenkette in umgekehrter Reihenfolge zu durchlaufen?",
        options: ["backward()"," reverse()"," revert()"],
        correctAnswer: "backward()",
      },
  ],
  JavaScript: [
    {
      question: "Welches Schlüsselwort wird verwendet, um eine Methode zu definieren?",
      options: ["method", "function", "def"],
      correctAnswer: "function",
    },
    {
        question: "Welche Methode wird verwendet, um eine Zufallszahl in JavaScript zu generieren?",
        options: ["random() ","generateRandom()","getRandom()"],
        correctAnswer: "random() ",
      },
      {
        question: "Wie überprüft man, ob eine Variable in JavaScript definiert ist?",
        options: ["isDefined()","exists()"," typeof"],
        correctAnswer: " typeof",
      },
      {
        question: "Welches Schlüsselwort wird verwendet, um eine bedingte Anweisung zu beginnen?",
        options: [" switch","if","case"],
        correctAnswer: "if",
      },
      {
        question: "Welches Objekt wird verwendet, um das aktuelle Datum und die aktuelle Uhrzeit in JavaScript zu erhalten?",
        options: ["Date()","DateTime()","Now()"],
        correctAnswer: "Now()",
      },
  ],
};

export default questions;
