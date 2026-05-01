# Express-App Dokumentation - Freitag, 1. Mai 2026 (Pennergame-Upgrade)

Heute haben wir die Anwendung grundlegend transformiert, von einer lokalen CRUD-App zu einer cloud-basierten Spieleplattform (Pennergame-Remake).

## 1. Cloud-Migration & Datenbank-Infrastruktur:
* **Aiven Cloud Integration:** Umstellung der Datenbank von lokalem XAMPP auf Aiven MySQL Cloud.
* **SSL-Verschlüsselung:** Implementierung von SSL-Verbindungen in Sequelize (`rejectUnauthorized: false`), um den Sicherheitsanforderungen von Cloud-Datenbanken gerecht zu werden.
* **IP-Routing:** Fix für macOS DNS-Probleme durch direkte Host-Auflösung (Verbindung via IP `142.93.234.47` auf Port `22194`).

## 2. Spielmechanik & Erweitertes Datenmodell:
* **User-Model Update:** Das `Users.js`-Model wurde um essentielle Pennergame-Attribute erweitert:
    * `money` & `max_money`: Kapitalverwaltung mit integriertem Becher-Limit.
    * `bottles`: Pfandflaschen-System.
    * `att`, `def`, `dex`: Skill-System für Angriffe, Verteidigung und Geschicklichkeit.
    * `last_collect`: Zeitstempel für die 10-Minuten-Sammel-Logik.

## 3. Backend-Refactoring & API-Sicherheit:
* **CORS-Dynamik:** Implementierung einer dynamischen CORS-Middleware in der `server.js`, die zwischen Development (`localhost:3000`) und Production unterscheidet.
* **Middleware-Optimierung:** Reorganisation der `server.js`, um sicherzustellen, dass Body-Parser vor den Routen geladen werden.
* **JWT-Sicherheit:** Behebung von Abstürzen durch Einführung eines `JWT_SECRET`-Fallbacks im `authController.js`.
* **Fix-Routes:** Erstellung temporärer Routen zur Verschlüsselung bestehender Test-Datenbestände (Migration von Klartext-Passwörtern zu Bcrypt-Hashes).

## 4. Frontend & Live-Daten:
* **Navbar-Integration:** Umbau der React-Navbar zur Anzeige von Echtzeit-Daten aus der Aiven-Cloud mittels Axios.
* **Auth-Synchronisation:** Verknüpfung der `useAuth`-Logik mit den neuen Cloud-Statistiken (Geld, Flaschen, Punkte).

## 5. Gelöste Probleme & Bugfixes:
* **EADDRINUSE:** Port-Konflikt auf Port 5000 gelöst durch Umstellung des Backend-Servers auf **Port 5001**.
* **JSON Syntax-Error:** Fix in der `config.json` und `models/index.js` durch Entfernen unzulässiger Kommentare.
* **Module Not Found:** Korrektur von Import-Fehlern in der zentralen `routes/index.js`.

---
**Nächste Schritte:** 
* Implementierung des Sammel-Buttons im Stadtpark (`feature/bottle-collecting`).
* Programmierung des Countdown-Timers für die 10-Minuten-Sperre.
* Erstellung des Inventars für Plunderstücke (Zauberstab, Brille).
