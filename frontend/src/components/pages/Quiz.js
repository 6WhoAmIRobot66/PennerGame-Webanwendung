import React, { useState, useEffect } from "react";
import questions from "../../Pages/Quiz/questions"; // Importiere die Fragen
import "../../Pages/Quiz/styles.css";
import film from "../../videos/Particle_Tunnel_4K_Motion_Background_Loop.mp4";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const Quiz = () => {
  const topics = ["Python", "HTML", "JavaScript"];
  const [isSpinning, setIsSpinning] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [questionData, setQuestionData] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const spinWheel = () => {
    setIsSpinning(true);
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * topics.length);
      setSelectedTopic(topics[randomIndex]);
      setIsSpinning(false);
    }, 2000);
  };

  useEffect(() => {
    if (selectedTopic) {
      const randomIndex = Math.floor(
        Math.random() * questions[selectedTopic].length
      );
      setQuestionData(questions[selectedTopic][randomIndex]);
    }
  }, [selectedTopic]);

  const handleAnswerSelection = (option) => {
    setSelectedAnswer(option);
  };

  const checkAnswer = () => {
    if (selectedAnswer === questionData.correctAnswer) {
      alert("Correct!");
    } else {
      alert("Incorrect!");
    }
  };

  // '<div className="spinner"></div>'

  return (
    <div className="container">
      <video autoPlay loop muted className="background-video">
        <source src={film} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="quiz-container">
        <div className="wheel">
          {isSpinning ? (
            <div className="spinner-container">
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <CircularProgress />
              </Box>
            </div>
          ) : (
            <div className="wheel-text">{selectedTopic}</div>
          )}
        </div>
        <button
          className="spin-button"
          onClick={spinWheel}
          disabled={isSpinning}
        >
          Spin
        </button>
        {questionData && (
          <div className="question-container">
            <div>
              <h2>Question:</h2>
              <p>{questionData.question}</p>
              <h3>Options:</h3>
              {questionData.options.map((option, index) => (
                <div key={index}>
                  <input
                    type="radio"
                    id={option}
                    name="answer"
                    value={option}
                    checked={selectedAnswer === option}
                    onChange={() => handleAnswerSelection(option)}
                  />
                  <label htmlFor={option}>{option}</label>
                </div>
              ))}
              <button className="check-answer" onClick={checkAnswer}>
                Check Answer
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;
