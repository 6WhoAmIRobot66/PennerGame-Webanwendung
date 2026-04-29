import React, { useEffect } from "react";
import { getUserPoints } from "../../api/config/api";
import { useAuth } from "../../api/auth/AuthProvider";
import TrophiesList from "../trophies/TrophiesList";
import "../../App.css";

const UserDashboard = () => {
  const { user, setUser } = useAuth();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await getUserPoints(user.id);

        console.log("Hallöchen", response.data);
        setUser({ ...user, ...response });
      } catch (error) {
        console.error("Fehler beim Abrufen der Benutzerdaten:", error);
      }
    };

    if (user) {
      fetchUserData();
    }
  }, []);

  return (
    <div className="user-dashboard">
      <h2>User Dashboard</h2>

      <div className="dashboard-content">
        {user ? (
          <div className="user-info">
            <p>Name: {user.username}</p>
            <p>Punkte: {user.points}</p>
            {/* Weitere Benutzerdaten anzeigen */}
 <TrophiesList points={user.points} />
          </div>
        ) : (
          <>
            <p>Hier könnten deine Daten stehen.</p>
            <p>Bitte warten...</p>
          </>
        )}
      </div>
    </div>
  );
};

export default UserDashboard;
