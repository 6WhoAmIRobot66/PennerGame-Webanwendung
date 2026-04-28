import React from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import QuizFrame from "./components/pages/quizcon/SuperQuiz";
import Sandbox from "./components/pages/Sandbox";
import { SignUp } from "./components/pages/SignUp";
import Footer from "./components/footer/Footer";
import SignIn from "./components/pages/SignIn";
import GameFrame from "./game/SuperGame";
import { AuthProvider } from "./api/auth/AuthProvider";
import UserDashboard from "./components/pages/UserDashboard";
import HTMLPage from "./components/pages/HtmlPage";
import JavaScriptPage from "./components/pages/JavaScriptPage";
import PythonPage from "./components/pages/PythonPage";
import Team from "./components/pages/TeamPage";
// import HighscoreBoard from "./Pages/Highscore/highscore";

function App() {
  return (
    <>
      <Router>
        <AuthProvider>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/quiz" element={<QuizFrame />} />
            <Route path="/sandbox" element={<Sandbox />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/GTAVI" element={<GameFrame />} />
            <Route path="/dashboard" element={<UserDashboard />} />
            <Route path="/htmlpage" element={<HTMLPage />} />
            <Route path="/javascriptpage" element={<JavaScriptPage />} />
            <Route path="/pythonpage" element={<PythonPage />} />
            <Route path="/teampage" element={<Team />} />
            {/* <Route path="/highscore" element={<HighscoreBoard />} /> */}
          </Routes>
          <Footer />
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
