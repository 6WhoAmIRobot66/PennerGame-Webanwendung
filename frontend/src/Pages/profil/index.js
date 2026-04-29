import React, { useState, useEffect } from "react";
import styles from "./index.css";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const [profile, setProfile] = useState({
    name: "Max Mustermann",
    profilePicture: "url_zum_profilbild.jpg",
    progress: 15,
    points: 55,
  });
  const navigate = useNavigate();
  const [dropdownSichtbar, setDropdownSichtbar] = useState(false);
  const [band, setBand] = useState("");

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      const response = await fetch("API_Endpunkt/zur/benutzerdaten");
      const userData = await response.json();

      const answeredQuestions = userData.answers.filter(
        (answer) => answer.correct
      );
      const progress = (answeredQuestions.length / 5) * 100;

      setProfile({
        ...profile,
        progress: progress,
        points: userData.points,
      });

      convertPoints(userData.points);
    } catch (error) {
      console.error("Fehler beim Abrufen der Benutzerdaten:", error);
    }
  };

  const handleSprachauswahl = (sprache) => {
    setDropdownSichtbar(false);

    switch (sprache) {
      case "Python":
        navigate("/Python");
        break;
      case "Javascript":
        navigate("/Javascript");
        break;
      case "HTML":
        navigate("/HTML");
        break;
      case "Quiz":
        navigate("/Quiz");
        break;
    }
  };

  const toggleDropdown = () => {
    setDropdownSichtbar(!dropdownSichtbar);
  };

  const convertPoints = (points) => {
    let newBand = "";

    if (points >= 100) {
      newBand = "Platinband";
    } else if (points >= 75) {
      newBand = "Goldband";
    } else if (points >= 40) {
      newBand = "Silberband";
    } else if (points >= 15) {
      newBand = "Bronzeband";
    } else {
      newBand = "Kein Band erreicht";
    }

    setBand(newBand);
  };

  return (
    <div className={styles["profile-page"]}>
      <div className={styles["profile-info"]}>
        <img src={profile.profilePicture} alt="Profilbild" />
        <h2>{profile.name}</h2>
        <p>Fortschritt: {profile.progress.toFixed(2)}%</p>
        <p>Gesammelte Punkte: {profile.points}</p>
        <p>Aktuelles Band: {band}</p>
        <button onClick={convertPoints}>Punkte umwandeln</button>
      </div>
      <div className={styles.div}>
        <button className="dropbtn" onClick={toggleDropdown}>
          Dropdown
        </button>
        {dropdownSichtbar && (
          <div className={styles.dropdowncontent}>
            <button onClick={() => handleSprachauswahl("Python")}>
              Python
            </button>
            <button onClick={() => handleSprachauswahl("Javascript")}>
              Javascript
            </button>
            <button onClick={() => handleSprachauswahl("HTML")}>HTML</button>
            <button onClick={() => handleSprachauswahl("Quiz")}>Quiz</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
