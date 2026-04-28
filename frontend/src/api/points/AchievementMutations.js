// Diese Funktion vergibt einem Benutzer eine Trophäe, indem sie eine POST-Anfrage an den entsprechenden API-Endpunkt sendet.
export const awardAchievement = async (userId, achievementName) => {
  try {
    // Senden einer POST-Anfrage an den API-Endpunkt zum Vergeben einer Trophäe
    const response = await fetch(`/api/users/${userId}/achievements`, {
      method: "POST", // Die Anfrage ist vom Typ POST
      headers: {
        "Content-Type": "application/json", // Der Inhaltstyp der Anfrage ist JSON
      },
      body: JSON.stringify({ achievement: achievementName }), // Das zu sendende Datenobjekt
    });
    // Die Antwort in JSON-Format konvertieren
    const data = await response.json();
    // Rückgabe einer Bestätigungsmeldung
    return data.message;
  } catch (error) {
    // Fehlerbehandlung im Falle eines Fehlers beim Vergeben der Trophäe
    console.error("Fehler beim Vergeben der Trophäe:", error);
    throw error;
  }
};

// Diese Funktion entfernt eine Trophäe von einem Benutzer, indem sie eine DELETE-Anfrage an den entsprechenden API-Endpunkt sendet.
export const removeAchievement = async (userId, achievementName) => {
  try {
    // Senden einer DELETE-Anfrage an den API-Endpunkt zum Entfernen einer Trophäe
    const response = await fetch(
      `/api/users/${userId}/achievements/${achievementName}`,
      {
        method: "DELETE", // Die Anfrage ist vom Typ DELETE
      }
    );
    // Die Antwort in JSON-Format konvertieren
    const data = await response.json();
    // Rückgabe einer Bestätigungsmeldung
    return data.message;
  } catch (error) {
    // Fehlerbehandlung im Falle eines Fehlers beim Entfernen der Trophäe
    console.error("Fehler beim Entfernen der Trophäe:", error);
    throw error;
  }
};
