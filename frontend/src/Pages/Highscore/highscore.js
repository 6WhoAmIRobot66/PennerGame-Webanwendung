import React, { useState } from "react";
import "./highscore.module.css";

const HighscoreBoard = () => {
  const [highscores, setHighscores] = useState([
    { name: "Benutzer 1", score: 100 },
    { name: "Benutzer 2", score: 90 },
    { name: "Benutzer 3", score: 80 },
  ]);

  return (
    <div>
      <h1>Highscore Board</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {highscores.map((entry, index) => (
            <tr key={index}>
              <td>{entry.name}</td>
              <td>{entry.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HighscoreBoard;
