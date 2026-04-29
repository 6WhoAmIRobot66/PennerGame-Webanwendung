import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import LandingPage from "./landingpage/LandingPage.js";
// Navbar und Footer Importe hier gelöscht, wenn sie nur in den Unterseiten genutzt werden
import QuizFrame from "./components/pages/quizcon/SuperQuiz";
import Sandbox from "./components/pages/Sandbox";
import { SignUp } from "./components/pages/SignUp";
import SignIn from "./components/pages/SignIn";
import GameFrame from "./game/SuperGame";
import { AuthProvider } from "./api/auth/AuthProvider";
import UserDashboard from "./components/pages/UserDashboard";
import HTMLPage from "./components/pages/HtmlPage";
import JavaScriptPage from "./components/pages/JavaScriptPage";
import PythonPage from "./components/pages/PythonPage";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route path="/quiz" element={<QuizFrame />} />
          <Route path="/sandbox" element={<Sandbox />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/GTAVI" element={<GameFrame />} />
          <Route path="/dashboard" element={<UserDashboard />} />
          <Route path="/htmlpage" element={<HTMLPage />} />
          <Route path="/javascriptpage" element={<JavaScriptPage />} />
          <Route path="/pythonpage" element={<PythonPage />} />
        </Routes>
        <Footer />
      </AuthProvider>
    </Router>
  );
}

export default App;
