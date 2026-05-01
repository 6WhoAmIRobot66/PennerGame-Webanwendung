
# Express-App Dokumentation - Freitag, 1. Mai 2026 (Pennergame-Upgrade)

Heute haben wir die Anwendung grundlegend transformiert, von einer lokalen CRUD-App zu einer cloud-basierten Spieleplattform (Pennergame-Remake).

## 1. Cloud-Migration & Infrastruktur
* **Aiven Cloud Integration:** Umstellung der Datenbank von lokalem XAMPP auf Aiven MySQL Cloud.
* **SSL-Verschlüsselung:** Implementierung von SSL-Verbindungen in Sequelize (`rejectUnauthorized: false`), um den Sicherheitsanforderungen von Cloud-Datenbanken gerecht zu werden.
* **IP-Routing:** Fix für macOS DNS-Probleme durch direkte Host-Auflösung via IP `142.93.234.47` auf Port `22194`.
* **Port-Management:** Wechsel des Backend-Ports auf **5001**, da Port 5000 durch macOS-Systemdienste blockiert war.

## 2. Spielmechanik & Erweitertes Datenmodell
* **User-Model Evolution:** Das `Users.js`-Model wurde um essentielle Pennergame-Attribute erweitert:
    * `money` & `max_money`: Kapitalverwaltung mit integriertem Becher-Limit.
    * `bottles`: Pfandflaschen-System.
    * `att`, `def`, `dex`: Skill-System für Angriffe, Verteidigung und Geschicklichkeit.
    * `last_collect`: Zeitstempel für die 10-Minuten-Sammel-Logik.

## 3. API-Sicherheit & Authentication
* **CORS-Dynamik:** Implementierung einer dynamischen CORS-Middleware, die zwischen Development (`localhost:3000`) und Production unterscheidet.
* **JWT-Fix:** Behebung von Login-Abstürzen durch Einführung eines `JWT_SECRET`-Fallbacks im `authController.js`.
* **Migration-Script:** Erstellung einer `fixRoutes.js`, um bestehende Test-Datenbestände von Klartext-Passwörtern auf sichere Bcrypt-Hashes zu migrieren.

## 4. Frontend-Anbindung
* **Navbar-Synchronisation:** Umbau der React-Navbar zur Anzeige von Echtzeit-Daten (Geld, Flaschen, Punkte) direkt aus der Aiven-Cloud mittels Axios.
* **Auth-Check:** Verknüpfung der `useAuth`-Logik mit den neuen Cloud-Statistiken.

## Welche Probleme sind aufgetreten / Lösungsansätze?
* **Problem:** "Cannot find module"-Fehler beim Serverstart. 
  * **Lösung:** Synchronisation der Dateinamen in `routes/index.js` (Korrektur von `fixRoute` zu `fixRoutes`).
* **Problem:** Safari verweigerte "sichere Verbindung" zu localhost. 
  * **Lösung:** Explizite Nutzung von `http://127.0.0.1` und Bereinigung doppelter CORS-Middlewares in `server.js`.

## Womit beschäftige ich mich als Nächstes?
* **Sammel-System:** Implementierung der Sammel-Logik im Frontend (Stadtpark-Komponente).
* **Countdown-Timer:** Entwicklung eines visuellen Timers für die 10-Minuten-Wartesperre.
* **Banden-Modul:** Aufbau der ersten Tabellen für das Clan/Banden-System.
