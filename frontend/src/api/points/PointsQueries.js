// Diese Funktion ruft die Punkte eines Benutzers ab, indem sie eine Anfrage an den entsprechenden API-Endpunkt sendet.
export const getUserPoints = async (userId) => {
  try {
    // Senden einer GET-Anfrage an den API-Endpunkt zum Abrufen der Benutzerpunkte
    const response = await fetch(`/api/users/${userId}/points`);
    // Die Antwort in JSON-Format konvertieren
    const data = await response.json();
    // Rückgabe der Punkte des Benutzers
    return data.points;
  } catch (error) {
    // Fehlerbehandlung im Falle eines Fehlers beim Abrufen der Punkte
    console.error("Fehler beim Abrufen der Benutzerpunkte:", error);
    throw error;
  }
};
