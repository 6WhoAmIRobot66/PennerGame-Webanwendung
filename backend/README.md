
# Express-App Dokumentation - Sonntag, 7. April 2024

* Node.js und npm installiert: Node.js und npm wurden auf dem System installiert, um die Entwicklung von Node.js-Anwendungen zu ermöglichen.
* npm-Projekt initialisiert: Das npm-Projekt wurde mit npm init -y initialisiert, wodurch die Standardkonfigurationen verwendet wurden.

## Nach der Initialisierung des Projekts haben wir die erforderlichen Pakete installiert.
* Express installiert: Das Express-Paket wurde mit dem Befehl npm install express installiert, um das Framework für die Express-Anwendung bereitzustellen.

## Die Express-Anwendung wurde eingerichtet, um als Backend für die CRUD-Funktionalität zu dienen.
* server.js erstellt: Die server.js-Datei wurde erstellt, um die Express-Anwendung zu initialisieren und den Server zu starten.
* Express-App konfiguriert: Die Express-App wurde konfiguriert, um auf Port 3000 zu lauschen und die Standardroute "/" zu definieren.
* Routing eingerichtet: Ein Basis-Routing für die API wurde in der routes.js-Datei definiert, um die CRUD-Endpunkte zu verwalten.

## Die CRUD-Funktionalität wurde implementiert, um Benutzerdaten abzurufen, zu erstellen, zu aktualisieren und zu löschen.
* Routen definiert: Die Routen für GET, POST, PUT und DELETE wurden in der routes.js-Datei definiert, um die entsprechenden CRUD-Operationen durchzuführen.
* Handlerfunktionen implementiert: Handlerfunktionen wurden für jeden Endpunkt erstellt, um auf die Anfragen zu reagieren und die Datenbankoperationen durchzuführen.
* CRUD-Abfragen getestet: Die Implementierung wurde getestet, um sicherzustellen, dass alle CRUD-Abfragen ordnungsgemäß funktionieren.



# Express-App Dokumentation - Montag, 8. April 2024

Heute haben wir unsere Express-App weiterentwickelt und neue Funktionalitäten hinzugefügt, um die Benutzererfahrung zu verbessern und die Leistung der Anwendung zu optimieren. Hier ist eine Zusammenfassung dessen, was wir implementiert haben:

## 1. Middleware hinzugefügt:

Wir haben Middleware-Funktionen eingeführt, um die Anfragen zu verarbeiten, bevor sie an die Endpunkte weitergeleitet werden. Dies umfasst Logging-Middleware, um Informationen über eingehende Anfragen zu protokollieren, und Authentifizierungsmiddleware, um den Zugriff auf bestimmte Routen zu kontrollieren.

## 2. Datenbankverbindung und Modelle eingerichtet:

Wir haben die Datenbankverbindung eingerichtet und Modelle für unsere Datenbanktabellen definiert. Dies ermöglicht es uns, auf einfache Weise auf die Datenbank zuzugreifen und Daten abzurufen, zu erstellen, zu aktualisieren oder zu löschen.

## 3. Abhängigkeiten installiert und initialisiert:

Wir haben alle erforderlichen Abhängigkeiten installiert und initialisiert, einschließlich Express, Sequelize (oder ein anderes ORM), Logging-Module wie Winston und Authentifizierungs-Plug-ins.

## 4. Logging-Mechanismen hinzugefügt:

Wir haben Logging-Mechanismen implementiert, um Serveraktivitäten und Fehler zu protokollieren. Dies ermöglicht es uns, Probleme schnell zu identifizieren und zu beheben und die Leistung unserer Anwendung zu überwachen.

## 5. Fehlerbehandlung implementiert:

Wir haben eine angemessene Fehlerbehandlung implementiert, um sicherzustellen, dass Fehlermeldungen an Client-Anfragen gesendet werden oder protokolliert werden, und um sicherzustellen, dass die Anwendung auch bei Fehlern robust bleibt.

### Durch diese Implementierungen sind wir in der Lage, eine robuste und leistungsstarke Express-Anwendung zu erstellen, die den Anforderungen unserer Benutzer gerecht wird und gleichzeitig eine reibungslose Benutzererfahrung bietet.

## 6. Kleine Änderungen:
1. Erstellung der `index.js`-Datei im models-Verzeichnis.
2. Verwendung von Modulen wie `fs`, `path`, und `Sequelize` für die Datenbankverbindung und Modelle.
3. Einrichtung der Umgebung mit der Verwendung der `NODE_ENV`-Variable.
4. Laden der Datenbankkonfiguration aus der `config.json`-Datei, abhängig von der Umgebung.
5. Initialisierung eines leeren Objekts `db` zur Speicherung der geladenen Modelle.
6. Verwendung der `basename`-Variable zur Extraktion des Dateinamens.
7. Zusammenführung der `Users.js` und `user.js` zu einer einzigen Datei.
8. Installation des Sequelize-Clients für die Interaktion mit der Datenbank.
9. Erstellung einer `sequelize`-Instanz zur Herstellung der Verbindung zur Datenbank.
10. Body-Parser als Abhängigkeit, um Anfragekörper zu analysieren und zu verarbeiten.
11. Passport als Abhängigkeit für die Implementierung der Authentifizierung und Autorisierung.
12. Express-Validator als Abhängigkeit für die Validierung von Benutzereingaben.
13. Helmet als Abhängigkeit für die Verbesserung der Sicherheit durch das Setzen von HTTP-Headern.
14. Cors als Abhängikeit, um Cross-Origin-Ressourcenfreigabe zu ermöglichen.
15. Ich habe die Validierungsregeln für den POST-Endpunkt hinzugefügt, um sicherzustellen, dass die Benutzereingaben den erwarteten Formaten entsprechen.
16. Ich habe die Validierungsergebnisse überprüft und bei Fehlern eine entsprechende Fehlerantwort zurückgegeben.


# Express-App Dokumentation - Dienstag, 9. April 2024

## Zusammenfassung der heutigen Aktivitäten:

- Implementierung der Datenbankanbindung in der Express-App.
- Definition von Modellen für Datenbanktabellen im Backend.
- Hinzufügen von Validierungsregeln für POST- und PUT-Anforderungen im Backend.
- Einrichtung einer neuen Route für die Main_Page im Backend.
- Implementierung der Main_Page-Route, um Daten zurückzugeben, basierend auf einem Modell im Backend.
- Aktualisierung der Frontend-Route, um Daten von der aktualisierten Main_Page-Route abzurufen.
- Refaktorisierung und Verbesserung des Codes in verschiedenen Teilen der Anwendung.

## Zusätzlich zu dieser Aktivität wurden einige Kleinigkeiten verbessert:

- Implementierung weiterer Routen und Endpunkte, um die Funktionalität der Anwendung zu erweitern.
- Hinzufügen von Middleware für Sicherheit und Authentifizierung.
- Dokumentation der durchgeführten Änderungen und Aktualisierung der Projektdokumentation.


# Express-App Dokumentation - Mittwoch, 10. April 2024

## Was ist heute passiert?
- Recherche zu JWT in Express für die Implementierung von Authentifizierung.
- Installation und Integration von JWT in unsere Express-Anwendung.
- Überarbeitung und Strukturierung der server.js-Datei, um JWT-Authentifizierung zu implementieren.
- Installation von Jest und Faker zur Durchführung von Unit-Tests.
- Konfiguration von Jest für die Testausführung.
- Schreiben eines Testfalls für die Authentifizierung in der Datei authentication.test.js.
- Durchführung der Testfallausführung, die jedoch zu Fehlern führte.
- Installation von Supertest zur Integration von Jest für das Testen von Express-Endpunkten.
- Auftreten eines Problems, bei dem das Sequelize-Objekt nicht korrekt an die init-Methode in unseren Modelldateien übergeben wurde.

## Welche Probleme sind aufgetreten/Lösungsansätze?
Das Hauptproblem, das heute aufgetreten ist, war das Fehlen der korrekten Übertragung des Sequelize-Objekts an die init-Methode in unseren Modelldateien. Die Lösung bestand darin, sicherzustellen, dass das Sequelize-Objekt ordnungsgemäß an die init-Methode übergeben wird.

## Womit beschäftige ich mich morgen?
- Klärung des Problems mit der Testfallausführung und Behebung der Fehler.
- Recherche zum CSRF-Schutz für die Passwortsicherheit und Implementierung entsprechender Maßnahmen in der Express-Anwendung.
- Mögliche Verbesserungen oder Erweiterungen der Authentifizierungsfunktionen in der Anwendung.
- Weiterführung der Unit-Tests für verschiedene Funktionen und Endpunkte der Anwendung.

=======
# Express-App Dokumentation - Sonntag, 7. April 2024

* Node.js und npm installiert: Node.js und npm wurden auf dem System installiert, um die Entwicklung von Node.js-Anwendungen zu ermöglichen.
* npm-Projekt initialisiert: Das npm-Projekt wurde mit npm init -y initialisiert, wodurch die Standardkonfigurationen verwendet wurden.

## Nach der Initialisierung des Projekts haben wir die erforderlichen Pakete installiert.
* Express installiert: Das Express-Paket wurde mit dem Befehl npm install express installiert, um das Framework für die Express-Anwendung bereitzustellen.

## Die Express-Anwendung wurde eingerichtet, um als Backend für die CRUD-Funktionalität zu dienen.
* server.js erstellt: Die server.js-Datei wurde erstellt, um die Express-Anwendung zu initialisieren und den Server zu starten.
* Express-App konfiguriert: Die Express-App wurde konfiguriert, um auf Port 3000 zu lauschen und die Standardroute "/" zu definieren.
* Routing eingerichtet: Ein Basis-Routing für die API wurde in der routes.js-Datei definiert, um die CRUD-Endpunkte zu verwalten.

## Die CRUD-Funktionalität wurde implementiert, um Benutzerdaten abzurufen, zu erstellen, zu aktualisieren und zu löschen.
* Routen definiert: Die Routen für GET, POST, PUT und DELETE wurden in der routes.js-Datei definiert, um die entsprechenden CRUD-Operationen durchzuführen.
* Handlerfunktionen implementiert: Handlerfunktionen wurden für jeden Endpunkt erstellt, um auf die Anfragen zu reagieren und die Datenbankoperationen durchzuführen.
* CRUD-Abfragen getestet: Die Implementierung wurde getestet, um sicherzustellen, dass alle CRUD-Abfragen ordnungsgemäß funktionieren.



# Express-App Dokumentation - Montag, 8. April 2024

Heute haben wir unsere Express-App weiterentwickelt und neue Funktionalitäten hinzugefügt, um die Benutzererfahrung zu verbessern und die Leistung der Anwendung zu optimieren. Hier ist eine Zusammenfassung dessen, was wir implementiert haben:

## 1. Middleware hinzugefügt:

Wir haben Middleware-Funktionen eingeführt, um die Anfragen zu verarbeiten, bevor sie an die Endpunkte weitergeleitet werden. Dies umfasst Logging-Middleware, um Informationen über eingehende Anfragen zu protokollieren, und Authentifizierungsmiddleware, um den Zugriff auf bestimmte Routen zu kontrollieren.

## 2. Datenbankverbindung und Modelle eingerichtet:

Wir haben die Datenbankverbindung eingerichtet und Modelle für unsere Datenbanktabellen definiert. Dies ermöglicht es uns, auf einfache Weise auf die Datenbank zuzugreifen und Daten abzurufen, zu erstellen, zu aktualisieren oder zu löschen.

## 3. Abhängigkeiten installiert und initialisiert:

Wir haben alle erforderlichen Abhängigkeiten installiert und initialisiert, einschließlich Express, Sequelize (oder ein anderes ORM), Logging-Module wie Winston und Authentifizierungs-Plug-ins.

## 4. Logging-Mechanismen hinzugefügt:

Wir haben Logging-Mechanismen implementiert, um Serveraktivitäten und Fehler zu protokollieren. Dies ermöglicht es uns, Probleme schnell zu identifizieren und zu beheben und die Leistung unserer Anwendung zu überwachen.

## 5. Fehlerbehandlung implementiert:

Wir haben eine angemessene Fehlerbehandlung implementiert, um sicherzustellen, dass Fehlermeldungen an Client-Anfragen gesendet werden oder protokolliert werden, und um sicherzustellen, dass die Anwendung auch bei Fehlern robust bleibt.

### Durch diese Implementierungen sind wir in der Lage, eine robuste und leistungsstarke Express-Anwendung zu erstellen, die den Anforderungen unserer Benutzer gerecht wird und gleichzeitig eine reibungslose Benutzererfahrung bietet.

## 6. Kleine Änderungen:
1. Erstellung der `index.js`-Datei im models-Verzeichnis.
2. Verwendung von Modulen wie `fs`, `path`, und `Sequelize` für die Datenbankverbindung und Modelle.
3. Einrichtung der Umgebung mit der Verwendung der `NODE_ENV`-Variable.
4. Laden der Datenbankkonfiguration aus der `config.json`-Datei, abhängig von der Umgebung.
5. Initialisierung eines leeren Objekts `db` zur Speicherung der geladenen Modelle.
6. Verwendung der `basename`-Variable zur Extraktion des Dateinamens.
7. Zusammenführung der `Users.js` und `user.js` zu einer einzigen Datei.
8. Installation des Sequelize-Clients für die Interaktion mit der Datenbank.
9. Erstellung einer `sequelize`-Instanz zur Herstellung der Verbindung zur Datenbank.
10. Body-Parser als Abhängigkeit, um Anfragekörper zu analysieren und zu verarbeiten.
11. Passport als Abhängigkeit für die Implementierung der Authentifizierung und Autorisierung.
12. Express-Validator als Abhängigkeit für die Validierung von Benutzereingaben.
13. Helmet als Abhängigkeit für die Verbesserung der Sicherheit durch das Setzen von HTTP-Headern.
14. Cors als Abhängikeit, um Cross-Origin-Ressourcenfreigabe zu ermöglichen.
15. Ich habe die Validierungsregeln für den POST-Endpunkt hinzugefügt, um sicherzustellen, dass die Benutzereingaben den erwarteten Formaten entsprechen.
16. Ich habe die Validierungsergebnisse überprüft und bei Fehlern eine entsprechende Fehlerantwort zurückgegeben.


# Express-App Dokumentation - Dienstag, 9. April 2024

## Zusammenfassung der heutigen Aktivitäten:

- Implementierung der Datenbankanbindung in der Express-App.
- Definition von Modellen für Datenbanktabellen im Backend.
- Hinzufügen von Validierungsregeln für POST- und PUT-Anforderungen im Backend.
- Einrichtung einer neuen Route für die Main_Page im Backend.
- Implementierung der Main_Page-Route, um Daten zurückzugeben, basierend auf einem Modell im Backend.
- Aktualisierung der Frontend-Route, um Daten von der aktualisierten Main_Page-Route abzurufen.
- Refaktorisierung und Verbesserung des Codes in verschiedenen Teilen der Anwendung.

## Zusätzlich zu dieser Aktivität wurden einige Kleinigkeiten verbessert:

- Implementierung weiterer Routen und Endpunkte, um die Funktionalität der Anwendung zu erweitern.
- Hinzufügen von Middleware für Sicherheit und Authentifizierung.
- Dokumentation der durchgeführten Änderungen und Aktualisierung der Projektdokumentation.



# Express-App Dokumentation - Mittwoch, 10. April 2024

## Was ist heute passiert?
- Recherche zu JWT in Express für die Implementierung von Authentifizierung.
- Installation und Integration von JWT in unsere Express-Anwendung.
- Überarbeitung und Strukturierung der server.js-Datei, um JWT-Authentifizierung zu implementieren.
- Installation von Jest und Faker zur Durchführung von Unit-Tests.
- Konfiguration von Jest für die Testausführung.
- Schreiben eines Testfalls für die Authentifizierung in der Datei authentication.test.js.
- Durchführung der Testfallausführung, die jedoch zu Fehlern führte.
- Installation von Supertest zur Integration von Jest für das Testen von Express-Endpunkten.
- Auftreten eines Problems, bei dem das Sequelize-Objekt nicht korrekt an die init-Methode in unseren Modelldateien übergeben wurde.

## Welche Probleme sind aufgetreten/Lösungsansätze?
Das Hauptproblem, das heute aufgetreten ist, war das Fehlen der korrekten Übertragung des Sequelize-Objekts an die init-Methode in unseren Modelldateien. Die Lösung bestand darin, sicherzustellen, dass das Sequelize-Objekt ordnungsgemäß an die init-Methode übergeben wird.

## Womit beschäftige ich mich morgen?
- Klärung des Problems mit der Testfallausführung und Behebung der Fehler.
- Recherche zum CSRF-Schutz für die Passwortsicherheit und Implementierung entsprechender Maßnahmen in der Express-Anwendung.
- Mögliche Verbesserungen oder Erweiterungen der Authentifizierungsfunktionen in der Anwendung.
- Weiterführung der Unit-Tests für verschiedene Funktionen und Endpunkte der Anwendung.


# Express-App Dokumentation - Donnerstag, 11. April 2024

## Was ist heute passiert?
Wir haben die Datenbankprobleme behoben und eine neue Datenbank erstellt oder repariert. Zusätzlich haben wir gemeinsam mit Julius an der Implementierung von Sitzungen gearbeitet und das Frontend-Design weiter verbessert. Dabei wurden verschiedene Seiten angelegt, darunter auch eine Quizseite mit zufälligen Fragen.

## Welche Probleme sind aufgetreten/Lösungsansätze?
Es gab einige Herausforderungen bei der Verbindung zwischen unserer API und der Datenbank, die nicht ganz klar war. Wir mussten uns mit allgemeinen Datenbankproblemen auseinandersetzen und einige davon beheben. Außerdem haben wir die MySQL-App bearbeitet, um die Funktionalität zu verbessern.

## Womit beschäftige ich mich morgen?
Morgen werde ich mich wahrscheinlich weiterhin mit der Datenbank und der API beschäftigen, um sicherzustellen, dass alles reibungslos funktioniert. Außerdem plant das Frontend, an der Benutzeroberfläche zu arbeiten und möglicherweise weitere Seiten oder Funktionen hinzuzufügen.


# Express-App Dokumentation - Freitag, 12. April 2024

1. **Was ist heute passiert?**
   - Datenbank überarbeitet
   - Frontend-Design fortgesetzt und Seiten angelegt
   - Implementierung der Quizseite und zufällige Auswahl
   - Routen für Benutzer im Backend erstellt
   - Fehlerbehebungen bei der API und der Datenbankverbindung
   - Sprint review 

2. **Welche Probleme sind aufgetreten/Lösungsansätze?**
   - Zeitmanagement 

3. **Womit beschäftige ich mich am Montag?**
   - Überprüfung und mögliche Anpassungen der API- und Datenbankverbindung
   - Fortsetzung der Backend-Entwicklung und Implementierung weiterer Routen und JWT
   - Fehlerbehebung und Verbesserungen basierend auf dem Feedback vom heutigen Tag


# Express-App Dokumentation - Montag, 15. April 2024

## Was ist heute passiert?
- Ein Authentifizierungsmiddleware für Express wurde implementiert, um JWT-Token zu überprüfen.
- Es wurden Routen für die Authentifizierung und Generierung von JWT-Token erstellt.
- Ein Testfall für die Authentifizierungsmiddleware wurde erstellt.
- Wir haben begonnen, ein Punktesystem mit einer Gamification-Bibliothek zu integrieren.
- Die Sequelize-Modelle für Benutzerpunkte wurden erstellt.
- Die Integration der Gamification-Bibliothek hat zu einem Fehler geführt.

## Welche Probleme sind aufgetreten/Lösungsansätze?
- Die Integration der Gamification-Bibliothek war nicht erfolgreich, da die Bibliothek nicht gefunden wurde. Wir haben versucht, eine alternative Bibliothek zu installieren, die jedoch nicht verfügbar war. 
- Eine Lösung war die Suche nach einer anderen Gamification-Bibliothek und die Behebung des Installationsproblems.

## Womit beschäftige ich mich morgen?
- Fortsetzung der Integration der Gamification-Bibliothek.
- Implementierung von Endpunkten in der Express-App, um mit dem Punktesystem zu interagieren.
- Weitere Tests für die Authentifizierungsmiddleware und die Implementierung von Belohnungssystemen in der React-Frontend-Anwendung.


# Express-App Dokumentation - Dienstag, 16. April 2024

## Was ist heute passiert?

- Integration der Gamification-Bibliothek in eine Express-App
- Einrichtung von Endpunkten in der Express-App zur Interaktion mit dem Punktesystem
- Implementierung von Funktionen zur Verwaltung von Benutzerpunkten, Trophäen und Statistiken
- Fehlerbehebung bei der Installation der Gamification-Bibliothek
- Aktualisierung von Sequelize-Modellen für die Benutzerpunkte
- Integration der Gamification-Funktionen in eine React-App
- Implementierung von API-Anfragen in der React-App, um auf das Punktesystem zuzugreifen
- Erstellung von Testfällen für die Punktesystem-Funktionen

## Welche Probleme sind aufgetreten/Lösungsansätze?

- Fehler bei der Installation der Gamification-Bibliothek wurden behoben, indem Abhängigkeiten überprüft und Konfigurationen angepasst wurden.
- Probleme mit der Datenbankverbindung wurden durch das Erstellen von Tests identifiziert und behoben.
- Sequelize-Modelle wurden aktualisiert, um Änderungen im Datenbankschema zu berücksichtigen.

## Womit beschäftige ich mich morgen?

- Fortsetzung der Arbeit an der Authentifizierungsmiddleware und Erstellung entsprechender Tests.
- Implementierung von Funktionen zur Benutzeranmeldung und -registrierung.
- Integration von Authentifizierungsfunktionen in die Express- und React-Apps.
- Durchführung weiterer Tests und Fehlerbehebung.
- Dokumentation der implementierten Funktionen und Tests.


# Express-App Dokumentation - Mittwoch, 17. April 2024

## Was ist heute passiert?
- Middleware-Datei aktualisiert: Die authenticateToken.js-Datei wurde aktualisiert, um sicherzustellen, dass die Middleware das JWT-Token ordnungsgemäß aus dem Authorization-Header extrahiert und überprüft, ob es gültig ist.
- Testdatei erstellt: Es wurde eine neue Testdatei authenticateToken.test.js erstellt, um die Funktionalität der aktualisierten Middleware zu testen. 
-Tests geschrieben und ausgeführt.

# Express-App Dokumentation - Donnerstag, 18. April 2024

## Was ist heute passiert?
- Routen und Controller im Backend für die Benutzerregistrierung, Anmeldung, Aktualisierung und Abmeldung implementiert (UserRoutes, authRoutes, apiRoutes, gamificationRoutes, index, PointsRoutes);
- eine Middleware zur Überprüfung und Extraktion von JWT-Token aus den Anfragen wurde implementiert; `authenticateToken`, ermöglicht die Authentifizierung von Benutzeranforderungen durch Überprüfung des JWT-Tokens.
- Implementierung der Routen und Controller im Backend für Benutzerregistrierung, Anmeldung, Aktualisierung und Löschung durchgeführt.
- Middleware zum Überprüfen und Extrahieren von JWT-Token aus Anforderungen erstellt.
- Logik für das Hinzufügen und Subtrahieren von Benutzerpunkten implementiert.
- Überarbeitung der Backend-Struktur, um sie besser zu organisieren.
- POSTMAN-Abfragen

## Welche Probleme sind aufgetreten/Lösungsansätze?
- Fehler beim Testen der Authentifizierungsfunktionen aufgetreten, die behoben werden mussten.
- Herausforderungen beim Implementieren der Middleware für die Authentifizierung und Fehlerbehebung bei der Validierung von JWT-Token.
- Probleme beim Arbeiten mit Postman

## Womit beschäftige ich mich morgen?
- Behebung von Fehlern und Optimierung der Middleware für die Authentifizierung.
- Fortsetzung der Arbeit an der Gamification-Funktionalität, einschließlich der Implementierung weiterer Funktionen wie das Zurücksetzen von Punkten.


# Express-App Dokumentation - Freitag, 19. April 2024

## Was ist heute passiert?
- Sprint Review und Sprint Retrospektive durchgeführt, jedoch eingeschränkt aufgrund von nicht vollständiger Teambesetzung
- Diskussion über abgeschlossene Aufgaben und erreichte Ziele
## Welche Probleme sind aufgetreten/Lösungsansätze?
- beeinträchtigte Effektivität der Reviews und Retrospektive
- Lücken in der Bewertung des Sprints
## Womit beschäftige ich mich Montag?
- Abarbeitung der Tickets aus dem Sprint Backlog
- Priorisierung der ausstehenden Tickets und Festlegung von klaren Zielen für den nächsten Sprint


# Express-App Dokumentation - Montag, 22. April 2024

## Was ist heute passiert?

### Implementierung von Authentifizierungsfunktionen:
- Registrierung (`registerUser`):
Ich überprüfe, ob ein Benutzer mit derselben E-Mail bereits existiert, und gebe eine entsprechende Fehlermeldung zurück.
Das Passwort wird vor dem Speichern in der Datenbank gehasht, was sicher ist.
Nach erfolgreicher Registrierung wird ein JWT-Token generiert und an den Client zurückgegeben.
- Login (`loginUser`):
Ich überprüfe, ob ein Benutzer mit der angegebenen E-Mail existiert und ob das Passwort übereinstimmt.
Ein JWT-Token wird generiert und an den Client zurückgegeben, wenn die Anmeldeinformationen korrekt sind.
- JWT-Token-Generierung und Überprüfung:
In der `authController.js`-Datei wird `jsonwebtoken` verwendet, um JWT-Token zu generieren und zu überprüfen.
Ich habe eine separate Middleware 'authenticateToken.js' erstellt, um den JWT-Token in eingehenden Anforderungen zu überprüfen.
- Hashen von Passwörtern:
Ich verwende `bcrypt` zum sicheren Hashen von Passwörtern, bevor sie in der Datenbank gespeichert werden.

### Authentifizierungsfunktionen Frontend:
- `AuthProvider.js` erstellt
- Durch das Einbetten aller Routen in den `AuthProvider` wird der Authentifizierungskontext über die gesamte Anwendung hinweg verfügbar gemacht
- Import von `AuthProvider` in der `App.js`
- In `AuthProvider.js` werden die Funktionen zum Anmelden, Registrieren und Abmelden definiert und über den `AuthContext` bereitgestellt. Diese Funktionen werden dann von `SignIn.js` und `SignUp.js` über die useAuth-Hook verwendet, um die entsprechenden Aktionen auszuführen.




# Express-App Dokumentation - Dienstag, 23. April 2024

## Was ist heute passiert?
- Wir haben das Problem mit der AuthProvider.js behoben, indem wir die signUp-Funktion implementiert haben, um die Benutzerregistrierung zu ermöglichen.
- Es wurde festgestellt, dass das Problem in der SignUp.js-Datei auftrat, da die signUp-Funktion nicht ordnungsgemäß in der AuthProvider.js definiert war.
- Um das Problem zu lösen, wurde die signUp-Funktion korrekt in der AuthProvider.js definiert und in der SignUp.js-Datei verwendet.
- Nachdem das Problem behoben war, haben wir die SignUp-Komponente in eine Funktion umgewandelt, um eine konsistente Funktionsweise innerhalb der Anwendung sicherzustellen.
- Anschließend haben wir die Änderungen in der SignUp.js-Datei überprüft, um sicherzustellen, dass die Funktionalität der Benutzerregistrierung ordnungsgemäß implementiert wurde.

- Ich habe einen Fehler in der Express-App behoben, indem ich router.use anstelle von app.get verwendet habe.
- Die Route /api/user/:userId/points wurde in den UserRoutes hinzugefügt, um Benutzerpunkte abzurufen.
- Eine neue React-Komponente namens UserDashboard wurde erstellt, um Benutzerdaten anzuzeigen und API-Anfragen zu verwalten.
- Die UserDashboard-Komponente wurde in die Hauptanwendung integriert und über die entsprechende Route erreichbar gemacht.

 - Quiz & Spiel erfolgreich implementiert
 - Signin & Signup verknüpft
 - AuthProvider gefixt
 - User Dashboard

1. **React-Komponenten erstellt**: Wir haben React-Komponenten wie SignIn, SignUp, UserDashboard und UserProfile erstellt, um verschiedene Funktionen in unserer Anwendung zu implementieren.
2. **API-Anfragen in React**: Wir haben axios verwendet, um API-Anfragen von unserer React-Anwendung aus zu senden, um Benutzerdaten abzurufen und zu aktualisieren.
3. **Styling von React-Komponenten**: Wir haben einige React-Komponenten mit CSS und Styling verbessert, um eine bessere Benutzererfahrung zu bieten.
4. **Fehlerbehandlung in React**: Wir haben Fehlerbehandlungstechniken in React implementiert, um auf Fehler bei API-Anfragen zu reagieren und diese angemessen zu behandeln.

## Einige Probleme, auf die wir gestoßen sind, waren:

1. **Fehler bei der Integration von API-Anfragen**: Es gab Probleme beim Integrieren von API-Anfragen in React-Komponenten aufgrund von Syntaxfehlern und Fehlern in den Endpunkten.
2. **Styling-Herausforderungen**: Es gab Herausforderungen beim Styling der React-Komponenten, insbesondere beim Erstellen eines modernen und ansprechenden Designs.

## Um diese Probleme zu lösen, haben wir:

1. **Syntaxfehler behoben**: Wir haben die Syntaxfehler in den React-Komponenten behoben, um sicherzustellen, dass sie korrekt funktionieren.
2. **Debugging durchgeführt**: Wir haben das Debugging durchgeführt, um Fehler zu identifizieren und zu beheben, die während der Entwicklung aufgetreten sind.
3. **Styling verbessert**: Wir haben das Styling der React-Komponenten verbessert, um ein ansprechendes und modernes Design zu erreichen.

## Morgen werde ich mich weiterhin mit der Entwicklung der React-Anwendung befassen und mich auf folgende Aufgaben konzentrieren:

- **Optimierung der Benutzererfahrung**: Ich werde mich darauf konzentrieren, die Benutzererfahrung zu optimieren, indem ich die Leistung der Anwendung optimiere.





# Express-App Dokumentation - Mittwoch, 24. April 2024

## Was ist heute passiert?
 - Überblick über verbleibende Aufgaben erstellt
 - Verknüpfungen zwischen FE & BE überprüft
 - Weitere Seiten erstellt & implementiert (HMLT / JAVASCRIPT / PYTHON)
 - kleinere Design Anpassungen
 - „SANDBOX“ Page komplett geändert

## Welche Arbeiten konnte ich noch erledigen?
CORS-Middleware konfiguriert und implementiert
Sequelize-Abfrage angepasst, um Bedingungen hinzuzufügen und Warnung zu beheben
Zusätzlich wurde die Logik für Trophäen in React & Express implementiert 


 ## Welche Probleme sind aufgetreten/Lösungsansätze?
 - GitHub
 - VSCODE & GitHub?
 - „zu wenig“ Zeit für „zu viel Projekt“ (eigener Anspruch zu Hoch)



# Express-App Dokumentation - Donnerstag, 25. April 2024

## Was ist heute passiert?
 - Teampage erstellt & Design
 - Dashboard Design
 - Trophysystem
 - Trophydesign


## Welche Probleme sind aufgetreten/Lösungsansätze?
zu viele Probleme im Code, die Spamanfragen verursachten, aber auch Probleme technischer Natur (wurde alles mit Julius gelöst)




# Express-App Dokumentation - Freitag, 26. April 2024

### Last Daily Recap // Projektabschluss

## Was ist heute passiert?
 - Datenbank fix
 - Punktesystem & Trophysystem fix
 - Retro & Review
 - Recap der gemeinsamen Arbeit
 - Letzter Feinschliff
 - Kleinere Design Anpassungen

## Welche Probleme sind aufgetreten/Lösungsansätze?
 - Retrospektive wurde durchgeführt

