# 🍺 TechSmarter Frontend - Pennergame Edition

Dieses Frontend ist das Gesicht der TechSmarter-Anwendung. Es wurde mit **React.js** entwickelt und bietet eine interaktive Oberfläche für die Pennergame-Simulation sowie die Lern-Quizzes.

## 🚀 Schnellstart

Um das Frontend lokal zu starten:

1.  **Abhängigkeiten installieren:**
    ```bash
    npm install
    ```
2.  **Anwendung starten:**
    ```bash
    npm start
    ```
    Die App öffnet sich automatisch unter [http://localhost:3000](http://localhost:3000).

## 🔌 API-Anbindung

Das Frontend kommuniziert mit dem Express-Backend. Die Konfiguration findest du unter `src/api/config/api.js`.
*   **Backend-URL:** `http://localhost:5001` (Default)
*   **Features:** Automatisches Laden der Navbar-Stats (Geld, Flaschen) nach dem Login.

## 🛠 Verfügbare Skripte

Im Projektverzeichnis kannst du folgende Befehle ausführen:

### `npm start`
Startet die App im Entwicklungsmodus. Bei Code-Änderungen lädt die Seite automatisch neu.

### `npm run build`
Erstellt die App für die Produktion im Ordner `build`. Der Build ist optimiert und bereit für das Deployment.

### `npm test`
Startet den Test-Runner für Unit-Tests.

## 📁 Wichtige Komponenten
*   **Navbar:** Zeigt die Live-Daten (Geld, Flaschen, Punkte) aus der Aiven-Cloud an.
*   **AuthProvider:** Verwaltet den Login-Status und speichert JWT-Tokens im LocalStorage.
*   **Dashboard:** Deine Übersicht über Skills und Fortschritt.

---
**Hinweis:** Stelle sicher, dass das Backend läuft, bevor du dich einloggst, da sonst keine Spieldaten geladen werden können.
