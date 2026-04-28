import React from "react";

const QuizFrame = () => {
  return (
    <div>
      <iframe
        src="quizcon/index.html"
        title="Quiz"
        width="100%"
        height="1000vh"
        style={{ border: "none" }}
      />
    </div>
  );
};

export default QuizFrame;
