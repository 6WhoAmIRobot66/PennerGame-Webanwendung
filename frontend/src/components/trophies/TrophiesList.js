import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../App.css";

const TrophiesList = ({ points }) => {
  const [trophies, setTrophies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTrophies = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5050/trophies/points?points=${points}`
        );
        setTrophies(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Fehler beim Abrufen der Trophäen:", error);
      }
    };

    fetchTrophies();
  }, []);

  if (loading) {
    return <p>Lade Trophäen...</p>;
  }

  if (!Array.isArray(trophies) || trophies.length === 0) {
    return <p>Keine Trophäen verfügbar</p>;
  }

  return (
    <div>
      {trophies.map((trophy) => (
        <div key={trophy.id}>
          <h3>{trophy.name}</h3>
          <p>{trophy.description}</p>
          <img className="trophy" src={trophy.imageUrl} alt={trophy.name} />
        </div>
      ))}
    </div>
  );
};

export default TrophiesList;
